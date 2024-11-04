import right_arrow_png from '../../assets/right-arrow.png'


export default function Componentfirst(data) {
    // const data = [component1,component3,component4,component1,component3];
  return (
    <>
    <div className='flex-wrap flex justify-between  px-24 mt-24'>
        <p className='font-semibold text-lg'>Grab the best deal on <span className='text-sky-400'>Smartphones</span></p>
        <p className='flex'>View All <img src={right_arrow_png} alt="right side arrow" className='w-4 h-6'/></p>
      </div>
      <div className='mx-24 h-1 bg-sky-400 w-72 '></div>
    
    <div className='py-4 px-24 flex flex-wrap grid-cols-5 mt-4'>
        { data.map((items,index) =>  
        <img src={items} key={index} alt="component11" className='mr-2 w-[16rem]'/> 
        )}
    </div>
    </>
  )
}
