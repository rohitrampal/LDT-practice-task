import footerImg from '../assets/footer-img.png'
import whatsApp from '../assets/whatsapp.png'
import phoneCall from '../assets/phone-call.png'
// import centerImg from '../assets/Group-203.png'
// import rightImg from '../assets/Group-202.png'
import eclipse from '../assets/Mask-group-footer.png'
function Footer() {
  return (
    <>
    <div className="bg-sky-500 mt-24 text-white ">
        <div className=' flex-wrap flex  justify-between'>
            <div className='mt-12 ml-24 space-y-4'>
                <h1 className='text-3xl font-bold mb-5' >MegaMart</h1>
                <p>Contact Us</p>
                
                <p><span className='flex-wrap flex'><img src={whatsApp} alt="whatsappImg" className='w-4 h-5 mr-2'/><span>Whats App</span></span> <span className='ml-5'>+1 202-918-2132</span></p>
                
                <p><span className='flex-wrap flex'><img src={phoneCall} alt="phonecallImg" className='w-4 h-5 mr-2'/><span>Call Us</span></span> <span className='ml-5'>+1 202-918-2132</span></p>
                <p>Download App</p>
                <p><img src={footerImg} alt="apps" className='mt-5'/></p>
            </div>
            <div className='mt-12'>
                <h1>Most Popular Categories</h1>
                <p className='bg-slate-100 h-[2px] w-44 mb-5'></p>
                <ul className='list-disc space-y-3'>
                    <li>Staples</li>
                    <li>Beverages</li>
                    <li>Personal Care</li>
                    <li>Home Care</li>
                    <li>Baby Care</li>
                    <li>Vegetables & Fruits</li>
                    <li>Snacks & Foods</li>
                    <li>Dairy & Bakery</li>
                </ul>
            </div>
            <div className='mt-12 '>
            <h1>Customer Services</h1>
                <p className='bg-slate-100 h-[2px] w-32 mb-5'></p>
                <ul className='list-disc space-y-3'>
                    <li>About</li>
                    <li>Terms & Conditions</li>
                    <li>FAQ</li>
                    <li>Privacy Policy</li>
                    <li>Baby E-waste Policy</li>
                    <li>Cancellation & Return Policy</li>
                </ul>
            </div>
            
            <img src={eclipse} alt="eclipse"  />
            
        </div>
        <div className='justify-center  grid mt-10'>
            <p className='bg-slate-100 h-[2px] '></p>
            <p >@ 2022 All rights reserved. Reliance Retail Ltd.</p>
        </div>
    </div>
    </>
  )
}

export default Footer