// import { LogoLight } from '../assets/index';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const UserInfo = useSelector((state) => state.bazar.userInfo);
  console.log(UserInfo);
  // console.log(productData)

  const [isLogedIn, setIsLogedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('customer_id')) {
      setIsLogedIn(true)
    } else {
      setIsLogedIn(false)
    }
  }, [isLogedIn])

  const logout = () => {
    localStorage.removeItem('customer_id');
    setIsLogedIn(false);
    navigate("/signin");
  }

  const login = () => {
    // localStorage.removeItem('customer_id');

    navigate("/signin");
  }

  return (
    <div className="z-50 w-full h-30 bg-white border-b-[1px] z-index-1 sticky top-0 border-b-gray-800 font-titleFont ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            {/* <img src={LogoLight} alt="LogoLight" className='w-28' /> */}
            <h2 className="text-2xl font-semibold py-4">Dream Nest</h2>
          </div>
        </Link>
        <div className="flex gap-5 items-center">
          <ul className="flex items-center gap-8 cursor-pointer">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <Link to="/category">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Category
              </li>
            </Link>
            {/* <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Whislist
            </li>

            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Profile
            </li> */}
          </ul>

          <Link to="/cart">
            <div className="cursor-pointer relative">
              <ShoppingCartIcon />
            </div>
          </Link>
          {localStorage.getItem('customer_id') ? (<Link onClick={logout} >Logout</Link>) : (<Link  to={"/signin"} >Log In</Link>)}
          
          {UserInfo && <p>{UserInfo.name}</p>}
        </div>
      </div>
    </div>
  );
};
