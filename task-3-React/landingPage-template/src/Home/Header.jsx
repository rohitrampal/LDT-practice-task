import location from '../assets/location.png'
import track from '../assets/fast-delivery.png'
import discount from '../assets/discount.png'
function Header() {
  return (
    <>
    <div className="flex flex-wrap justify-between px-24 py-2 bg-zinc-200">
      <p>Welcome to worldwide Megamart!</p>
      <div className="text flex flex-wrap  ">
        <p className='flex '><img src={location} alt="location" className='w-4 h-4 mt-1 mr-1' /> Deliver to <strong className='pl-1'>423651</strong></p>
        <p className='bg-slate-400 h-4 w-[1.5px] ml-2 mt-1'></p>
        
        <p className='flex ml-2 mr-2'><img src={track} alt="location" className='w-5 mr-1 ' />Track your order </p>
        <p className='bg-slate-400 h-4 w-[1.8px] mr-2 mt-1'></p>
        
        <p className='flex'><img src={discount} alt="location" className='w-5 mr-1 h-5 mt-[2px]' />All Offers</p>
      </div>
    </div>
    </>
  )
}

export default Header