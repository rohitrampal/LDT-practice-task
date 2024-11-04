import menu from '../assets/menu.png'
import search from '../assets/search.png'
import menu2 from '../assets/list.png'
import user from '../assets/user.png'
import cart from '../assets/shopping-cart.png'
import down from '../assets/down.png';
import DropDowns from './DropDowns'
export default function Navbar() {
    const data = ["Groceries","Premium Fruits","Home & Kitchen","Fashion","Electronics","Beauty","Home Improvement","Sports, Toys & Luggage"]
  return (
    <>
    <nav className='flex flex-wrap justify-between py-4 px-24'>
        <div >
        <p className='flex flex-wrap '><img src={menu} alt="menu" className='w-10 bg-slate-300 rounded-lg p-1 mr-2 ' /> <h1 className='text-4xl font-bold text-sky-600 '>MegaMart</h1></p>
        </div>
        <div className='flex flex-wrap mr-3 '>
            <p className='flex flex-wrap bg-slate-100 rounded-xl p-2 mr-6 w-[42rem] justify-between   '>
                <p className='flex flex-wrap '>
                    <img src={search} alt="search" className='w-8 p-1'/>
                    <input type="text" name="text" id="text" className=' mx-2 w-72 rounded-lg border-none bg-inherit   ' placeholder='Search grocery essential and more...' />
                </p>
            <img src={menu2} alt="menu2" className='w-8' />
            </p>
            <div className='flex  flex-wrap mt-4'>
                <p className='flex'><img src={user} alt="user" className='w-5 h-5 mr-2' /> <h2>Sign Up/Sign In</h2></p>
                <p className='bg-slate-400 h-4 w-[1.8px] mx-3 mt-1'></p>
                <p className='flex'><img src={cart} alt="user" className='w-5 h-5 ml-1 mr-2' /><h2>Cart</h2></p>
            </div>
        </div>
        
    </nav>

    {/* for dropdown */}
    <nav className='flex flex-wrap justify-between py-4 px-24 bg-stone-50 md:grid-cols-3'>
        {data.map((items,index)=> <DropDowns value={items} key={index} img={down} /> )}


        
        {/* <DropDown value="Groceries" img={down} />
        <DropDown value="Premium Fruits" img={down} />
        <DropDown value="Home & Kitchen" img={down} />
        <DropDown value="Fashion" img={down} />
        <DropDown value="Electronics" img={down} />
        <DropDown value="Beauty" img={down} />
        <DropDown value="Home Improvement" img={down} />
        <DropDown value="Sports, Toys & Luggage" img={down} /> */}
        {/* <p className='flex-wrap flex bg-slate-200 rounded-2xl p-2'>Groceries<img src={down} alt="down-arrow" className='w-4 h-4 mt-1 ml-2' /></p>
        <p className='flex-wrap flex bg-slate-200 rounded-2xl p-2'>Premium Fruits<img src={down} alt="down-arrow" className='w-4 h-4 mt-1 ml-2' /></p>
        <p className='flex-wrap flex bg-slate-200 rounded-2xl p-2'>Home & Kitchen<img src={down} alt="down-arrow" className='w-4 h-4 mt-1 ml-2' /></p>
        <p className='flex-wrap flex bg-slate-200 rounded-2xl p-2'>Fashion<img src={down} alt="down-arrow" className='w-4 h-4 mt-1 ml-2' /></p>
        <p className='flex-wrap flex bg-slate-200 rounded-2xl p-2'>Electronics<img src={down} alt="down-arrow" className='w-4 h-4 mt-1 ml-2' /></p>
        <p className='flex-wrap flex bg-slate-200 rounded-2xl p-2'>Beauty<img src={down} alt="down-arrow" className='w-4 h-4 mt-1 ml-2' /></p>
        <p className='flex-wrap flex bg-slate-200 rounded-2xl p-2'>Home Improvement<img src={down} alt="down-arrow" className='w-4 h-4 mt-1 ml-2' /></p>
        <p className='flex-wrap flex bg-slate-200 rounded-2xl p-2'>Sports, Toys & Luggage<img src={down} alt="down-arrow" className='w-4 h-4 mt-1 ml-2' /></p> */}
    </nav>
    </>
  )
}
