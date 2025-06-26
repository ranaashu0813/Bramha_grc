import React ,{ useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'
import Catalog from './Product_api';
import './Product.css'
import { Link } from 'react-router-dom';
import Productpricing from './Productpricing';

const Product = () => {
    const [menu , setmenu] = useState(Catalog); 
    console.log(menu);
  return (
    <div>

        <Navbar/>
        <Productpricing/>
        
        <div className="container_product" >
    {
        Catalog.map((currelm)=>{
            return(
               
                <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4
                 ring-red-500 ring-opacity-40 max-w-sm " style={{margin:"3rem"}}>
                <div className="relative">
                    <img className="w-full h-[45vh]" src={currelm.image} alt="Product Image"/>
                    <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                    </div>
                </div>
                <div className="p-4">
         
                    {/* <p className="text-gray-600 mb-4 font-bold text-lg">{currelm.description}</p> */}
                    <div className="flex items-center justify-between">

                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                           <Link to='/contact' > Buy Now</Link>
                        </button>
                    </div>
                </div>
            </div>
         
            )
        })
    }
    </div>
        <Footer/>
</div>
  )
}

export default Product