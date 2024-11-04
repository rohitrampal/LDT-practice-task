// for component first
import component1 from '../../assets/component_data/Group-25.png'
import component3 from '../../assets/component_data/Group-41.png'
import component4 from '../../assets/component_data/Group-42.png'


// for component second
import electronics from '../../assets/categories/electronics.png'
import furniture from '../../assets/categories/furniture.png'
import watches from '../../assets/categories/watches.png'
import decor from '../../assets/categories/decor.png'
import accessories from '../../assets/categories/accessories.png'


// for component third
import img1 from '../../assets/elc_brand/Group-50.png'
import img2 from '../../assets/elc_brand/Group-51.png'
import img3 from '../../assets/elc_brand/Group-52.png'


// for component four
import daily from '../../assets/essentails/daily_essentials.png'
import vegie from '../../assets/essentails/vegitables.png'
import strowberry from '../../assets/essentails/strowberry.png'
import mango from '../../assets/essentails/mango.png'
import fruits from '../../assets/essentails/fruits.png'
import cherry from '../../assets/essentails/cherry.png'


import Componentfirst from './Componentfirst'
import ComponentSecond from '../ComponentSecond'
import Componentthree from './Componentthree'
import Componentfour from './componentfour'
// import Componentfour from './Componentfour'



function Component() {
    const dataFirst = [component1,component3,component4,component1,component3];

    const dataSecond = [
      { img:electronics,name:'Electronics'},
      { img:furniture,name:'Furniture'},
      { img:watches,name:'Watches'},
      { img:decor,name:'Decor'},
      { img:accessories,name:'Accessories'}
      ,{ img:electronics,name:'Electronics'},
      { img:furniture,name:'Furniture'}
    ];

    const dataThird = [img1,img2,img3];

    const dataFourth = [
      { img:daily, name:'Daily Essentials' },
      { img:vegie, name:'Vegitables' },
      { img:fruits, name:'Fruits' },
      { img:strowberry, name:'Stroberry' },
      { img:mango, name:'Mango' },
      { img:cherry, name:'Cherry' }
    ];
  return (
    <>
    {/* for components one */}
      < Componentfirst data={dataFirst} />

    {/* for components two */}
      < ComponentSecond data={dataSecond} />

    {/* for components three */}
    < Componentthree data={dataThird} />

        {/* for component four */}
      < Componentfour data={dataFourth} />

    </>
  )
}

export default Component