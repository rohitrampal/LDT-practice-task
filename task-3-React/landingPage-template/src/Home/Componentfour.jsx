import right_arrow_png from '../assets/right-arrow.png'
import img1 from '../assets/essentails/daily_essentials.png'
import img2 from '../assets/essentails/vegitables.png'
import img3 from '../assets/essentails/strowberry.png'
import img4 from '../assets/essentails/mango.png'
import img5 from '../assets/essentails/fruits.png'
import img6 from '../assets/essentails/cherry.png'
function Componentfour() {
    const data = [
      { img:img1, name:'Daily Essentials' },
      { img:img2, name:'Vegitables' },
      { img:img3, name:'Fruits' },
      { img:img4, name:'Stroberry' },
      { img:img5, name:'Mango' },
      { img:img6, name:'Cherry' }
    ];
  return (
    <>
        <div className="container"><div className='flex-wrap flex justify-between  px-24 pt-4'>
          <p className='font-semibold text-lg'>Daily <span className='text-sky-400'>Essentials</span></p>
          <p className='flex'>View All <img src={right_arrow_png} alt="right side arrow" className='w-4 h-6'/></p>
        </div>
        <div className='mx-24 h-1 bg-sky-400 w-32 '></div></div>
        <div className='py-4 px-24'>
            <div className='flex-wrap flex grid-cols-6'>
              {data.map((items,index)=>  
                <div className='text-center'>
                  <img src={items.img} key={index} alt="img" className='bg-stone-300 rounded-2xl p-5 mr-[13px] w-52 h-48'/>
                  <p>{items.name}</p>
                  <p className='text-2xl font-semibold'>UP to 50% OFF</p>
                </div>
              )}
            </div>
        </div>
    </>
  )
}

export default Componentfour