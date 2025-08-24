import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelp } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { SiSwiggy } from "react-icons/si";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

function Header() {

const cartItems = useSelector((store) => store.cart.items) || [];

  return (
    <>
      <nav className="bg-gray-900 text-white text-l flex justify-between px-12 items-center h-20">
     
        <div className="flex items-center">
          <Link to='/'>
          <SiSwiggy color="orange" size={50} />
          </Link>
        </div>

        <ul className="flex items-center">
          {/* ✅ Search with Icon */}
          <div className="flex items-center mx-5 my-6">
            <span className="text-gray-400 mr-2">
              <FaSearch />
            </span>
          </div>

          {/* ✅ Offer */}
          <div className="flex items-center mx-5 cursor-pointer hover:text-orange-400">
            <BiSolidOffer color="orange" className="mr-1" />
           <Link to='/offers'> <li>OFFER</li></Link>
          </div>

          {/* ✅ Help */}
          <div className="flex items-center mx-5 cursor-pointer hover:text-orange-400">
            <IoHelp className="mr-1" />
          <Link to="/help">  <li>HELP</li></Link>
          </div>

    
          <div className="flex items-center mx-5 cursor-pointer hover:text-orange-400">
            <IoIosLogIn className="mr-1" />
           <Link to='/signin'> <li>LOGIN</li></Link>
          </div>

          
          <div className="flex items-center mx-5 cursor-pointer hover:text-orange-400">
            <FaCartArrowDown color="lightgreen" className="mr-1" />
           <Link to='/cart'> <li>CART - {cartItems.length}</li></Link>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Header;
