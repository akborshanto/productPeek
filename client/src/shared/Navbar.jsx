import React, { Fragment, useState } from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
const [user,setUser,logOut]=useState(false)
const handleLogOut=()=>{
  console.log('asfd')
}
const handleTheme=()=>{
console.log("dfsa")
}


  const links=<Fragment>
  <li>
  <NavLink
    to="/like"
    className={({ isActive }) =>
      isActive
        ? "bg-gradient-to-r from-red-400 to-orange-600  text-white mx-2"
        : " border border-orange-300  text-red-400 "
    }
  >
 Like
  </NavLink>
</li>
  <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? "bg-gradient-to-r from-red-400 to-orange-600  text-white mx-2"
        : " border border-orange-300  text-red-400 "
    }
  >
    HOME
  </NavLink>
</li>
  <li>
  <NavLink
    to="/product"
    className={({ isActive }) =>
      isActive
        ? "bg-gradient-to-r from-red-400 to-orange-600 mx-2 text-white"
        : "border border-orange-300  text-red-400 "
    }
  >
Product
  </NavLink>
</li>
  <li>
  <NavLink
    to="/item"
    className={({ isActive }) =>
      isActive
        ? "bg-gradient-to-r from-red-400 to-orange-600 mx-2 text-white"
        : "border border-orange-300  text-red-400 "
    }
  >
Item
  </NavLink>
</li>
  </Fragment>
  return (
    <div>   <div className="navbar bg-white-400" >
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className=" z-10 menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100  rounded-box w-52"
        >
          {links}
        </ul>
      </div>
      <a className="btn btn-ghost  font-sedan  text-14px md:text-[20px] lg:text-2xl ">
{/*   <img src={logo} alt="" className="w-8" />
 */}       PRODUCT_PEEK   
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">{links}</ul>
    </div>
    <div className="navbar-end">
      <input
        type="checkbox"
        className="toggle toggle-error mx-2"
        onClick={handleTheme}
      />

      {user ? (
        <div className="avatar mx-4">
          <div className="w-8 lg:w-10 rounded-full">
            <img
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              title={user?.email}
            />
            <p>{user?.email}</p>
          </div>
        </div>
      ) : (
        ""
      )}

      {user ? (
     
        <button
          onClick={logOut()}
          className=" btn btn-outline cursor-pointer cursor-pointer uppercase bg-orange mx-2 font-bold my-6 lg:px-4 lg:py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.2rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-orange-500 border border-orange-300"
        >
          LOGOUT
        </button>



     
      ) : (
        <Link to="/login">
        <button className="btn btn-outline cursor-pointer cursor-pointer uppercase bg-orange mx-2 font-bold my-6 lg:px-4 lg:py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.2rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-orange-500 border border-orange-400">
          LOGIN
        </button>
      </Link>
      )}
    </div>
  </div></div>
  )
}

export default Navbar