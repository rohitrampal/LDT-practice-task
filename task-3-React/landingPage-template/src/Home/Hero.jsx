import rectangle from '../assets/Rectangle-5.png'
import left_arrow from '../assets/left-arrow.svg'
import right_arrow from '../assets/right-arrow.svg'
import mask_group from '../assets/Mask-group.png'
import watch from '../assets/watch.svg'
import dots from '../assets/dots.svg'
import text from '../assets/text-photo.svg'
export default function Hero() {
  return (
    <>
    <div className='py-4 px-24  box-border sm:hidden lg:block'>
    <img src={rectangle} alt="rectangle" className='w-[84rem] relative z-1 ' />
        <div>
        <img src={left_arrow} alt="rectangle" className='absolute z-2 top-[21rem] left-14' />
        <img src={right_arrow} alt="rectangle" className='absolute z-3 right-14 top-[21rem]' />
        <img src={mask_group} alt="rectangle"  className='absolute z-4 right-24 top-52 2xl:h-[22rem] md:hidden xl:block xl:h-fit'/>
        <img src={watch} alt="watch" className='absolute right-56 top-64 md:hidden xl:block' />
        <img src={text} alt="watch" className='absolute left-48 top-64 ' />
        <img src={dots} alt="watch" className='absolute left-48 top-[31rem] ' />
        </div>
    </div>
    

    </>
  )
}
