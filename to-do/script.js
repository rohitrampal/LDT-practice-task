let toDoItems = document.querySelector('.items');
let inputText = document.getElementById('inputToDo');
let addToDo = document.getElementById('addToDo');
let from = document.getElementById('from')
let to = document.getElementById('to')
let filter = document.getElementById('filter')
let data = []
let filterOut = document.getElementById('filterOut');


let previousData = document.createElement('li');

filter.addEventListener('click',()=>{
    document.querySelector('.filter').style.display = 'block'
    document.querySelector('#filter').style.display = 'none'
})
filterOut.addEventListener('click',()=>{
    
    let localData = localStorage.getItem('data')
    let parseData = JSON.parse(localData)
    // let oldData = document.createElement('li');
    previousData.innerHTML = '';
    previousData.style.listStyle = "none"
    // console.log(parseData);
    parseData.forEach(element => {
        let fromValue = Number(from.value)
        let toValue = Number(to.value)
        
        if( element.date >= fromValue && element.date <= toValue ){
            let t = `<p>${element.text}</p>`
            previousData.innerHTML += t
            console.log(element.text);
        }
        
    });
    toDoItems.append(previousData)
})


addToDo.addEventListener('click',()=>{
    // document.querySelector('.filter').style.display = 'none'
    // document.querySelector('#filter').style.display = 'inline-block'
    let text = inputText.value;
    let date = new Date()
    // console.log(text,date);
    
    let li = document.createElement('li');
    let newText = `
        <input type="text" disabled class="newText" name="newText" value="${text}"/> 
        <button type="button" id="done"  >Done</button>
        <button type="button" id="edit" >Edit</button>
        <button type="button" id="remove" >Remove</button>
        <button type="button" id="editDone" style="display:none" >Done</button>
    `
    li.innerHTML = newText;
    toDoItems.append(li)

    data.push({ text:text, date:date.getSeconds() })
    
    localStorage.setItem('data',JSON.stringify(data))

    

    inputText.value = ''
    // console.log(data);
})

toDoItems.addEventListener('click',(e)=>{
    let newText = e.target.parentNode.querySelector('.newText')
    let oldValue;
    // console.log(oldValue);
    if(e.target.id === 'done'){
        newText.style.textDecoration = 'line-through'
    }
    
    else if(e.target.id === 'remove'){
        let newText = e.target.parentNode
        newText.remove()
    }
    
    else if(e.target.id === 'edit'){
        newText.disabled = ''
        // e.target.previousElementSibling.style.display = 'none'
        // e.target.nextElementSibling.style.display = 'none'
        // e.target.nextElementSibling.nextElementSibling.style.display = 'inline-block';

        e.target.parentNode.querySelector('#done').style.display = 'none';
        e.target.parentNode.querySelector('#remove').style.display = 'none';
        e.target.parentNode.querySelector('#editDone').style.display = 'inline-block';
        newText.style.textDecoration = 'none';
        oldValue = newText.value;
        
        
        
    }
    else if(e.target.id === 'editDone'){
        
        newText.disabled = 'disabled'
        e.target.parentNode.querySelector('#done').style.display = 'inline-block';
        e.target.parentNode.querySelector('#remove').style.display = 'inline-block';
        e.target.parentNode.querySelector('#editDone').style.display = 'none';
        let newValue = e.target.parentNode.querySelector('.newText').value;
        // console.log(newValue);
        let localStorageData = localStorage.getItem('data');
        let data = JSON.parse(localStorageData);
        console.log(data);
        
        data.forEach((item, index) => {
            // if(item.text == oldValue){
            //     // console.log(data[index].text,data[index].date);
            //     console.log('value found');
                
            //     // data[index].text = newValue;
            // }
            console.log(item.text);
            console.log(oldValue);
            console.log(newValue);
            
            
            if(item.text == oldValue){
                console.log('value found');}
                else{
                    console.log('failed');
                    
                }
            
        })
    }
})




// sample output for date = a Sat Oct 19 2024 11:38:27 GMT+0530 (India Standard Time)