import right_arrow_png from '../assets/right-arrow.png'
import electronics from '../assets/categories/electronics.png'
import furniture from '../assets/categories/furniture.png'
import watches from '../assets/categories/watches.png'
import decor from '../assets/categories/decor.png'
import accessories from '../assets/categories/accessories.png'

function ComponentSecond() {
  const data = [{ img:electronics,name:'Electronics'},{ img:furniture,name:'Furniture'},{ img:watches,name:'Watches'},{ img:decor,name:'Decor'},{ img:accessories,name:'Accessories'},{ img:electronics,name:'Electronics'},{ img:furniture,name:'Furniture'}];
  return (
    <>
    <div className="container"><div className='flex-wrap flex justify-between  px-24 mt-24'>
          <p className='font-semibold text-lg'>Shop From <span className='text-sky-400'>Top Categories</span></p>
          <p className='flex'>View All <img src={right_arrow_png} alt="right side arrow" className='w-4 h-6'/></p>
        </div>
      <div className='mx-24 h-1 bg-sky-400 w-48 '></div></div>

      <div className='py-4 px-24 bg-slate-50'>
            <div className='flex-wrap flex grid-cols-6 '>
              {data.map((items,index)=>  
                
                <div className='text-center mr-10'>
                  <p className=' rounded-[50%] '><img src={items.img} key={index} alt="img" className='  p-6  mb-4 w-36'/></p>
                  <p>{items.name}</p>
                </div>
                
                
               )} 
            </div>
        </div>

    </>
  )
}

export default ComponentSecond