import right_arrow_png from '../assets/right-arrow.png'
import img1 from '../assets/elc_brand/Group-50.png'
import img2 from '../assets/elc_brand/Group-51.png'
import img3 from '../assets/elc_brand/Group-52.png'
export default function Componentthree() {
  const data = [img1,img2,img3];
  return (
    <>
      
        <div className='flex-wrap flex justify-between  px-24 mt-24'>
          <p className='font-semibold text-lg'>Top <span className='text-sky-400'>Electronics Brands</span></p>
          <p className='flex'>View All <img src={right_arrow_png} alt="right side arrow" className='w-4 h-6'/></p>
        </div>
        <div className='mx-24 h-1 bg-sky-400 w-48 '></div>

        <div className='py-4 px-24 mt-4'>
          <div className='flex flex-wrap grid-cols-3'>
            {data.map((items,index)=> <img src={items} keys={index} alt="image" className='mr-[2.4rem]' />)}
            
          </div>
        </div>
      
    </>
  )
}
