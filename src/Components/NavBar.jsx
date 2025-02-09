import React from 'react'
import './NavBar.css';
import { IoMdMenu } from "react-icons/io";
const NavBar = () => {
  return (
    <>
    <div className="d-flex pt-2 align-items-center justify-content-around navbar">
        <img width={'6%'} src="https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2024/06/cropped-TAK-DEVS-Color-Logo-1536x1536.png" alt="" />
        
            <ul className='list-unstyled nav-top d-flex gap-4 align-items-center justify-content-center pt-4'>
                <li>
                    Home
                </li>
                <li>
                   Solutions
                </li>
                <li>
                    About Tak Devs
                </li>
                <li>
                    Case Studies
                </li>
                <li>
                    Blog
                </li>
                <li>
                    Events
                </li>
            </ul>
            <div className="d-flex gap-3 align-items-center justify-content-center ">
                <div className="d-flex flex-column">
                    <a className='text-decoration-none client rounded-3 p-1 text-black' href="#">Client Support</a>
                    <p className='num'>+92 300 421 2395</p>
                </div>
                <button className=" rounded-3 text-white contact">Contact Us</button>
                <IoMdMenu className='menu' size={25}/>
               
            </div>
        </div>
    
    </>
  )
}

export default NavBar