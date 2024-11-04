import right_arrow_png from '../../assets/right-arrow.png'

export default function ComponentTitle() {
  return (
    <>
        <div className='flex-wrap flex justify-between  px-24 mt-24'>
            <p className='font-semibold text-lg'>Grab the best deal on <span className='text-sky-400'>Smartphones</span></p>
            <p className='flex'>View All <img src={right_arrow_png} alt="right side arrow" className='w-4 h-6'/></p>
      </div>
      <div className='mx-24 h-1 bg-sky-400 w-72 '></div>
    </>
  )
}
