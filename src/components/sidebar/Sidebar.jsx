import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";
import { LiaHourglassEndSolid } from "react-icons/lia";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineHistory } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import "./sidebar.css"
import { useData } from '../../global/User_Context';

const Sidebar = () => {
    const [openNav, setOpenNav]= useState(false)
    const {state, dispatch} = useData()
    console.log(state)

    const navigate = useNavigate()

    const handleLogout=()=>{
        dispatch({type: "LOGOUT"})
        navigate("/")
    }

    

  return (
    <div className={`sidebar_body ${openNav? "open": null}`}>
      <div className="side_header">
        {
            openNav? 
           <div className="open_header">
            <RiArrowRightCircleFill className='cancel_icon' onClick={()=>setOpenNav((prev)=> !prev)}/>  
           </div>:
            <MdMenu onClick={()=>setOpenNav((prev=> !prev))}/>
        }
      </div>

      <div className="sidebar_content">
        <div className="content_wrapper">
            <MdAccountBalance />
            {
                openNav? 
                <p>Accounts</p>: 
                null
            }
        </div>
        <div className="content_wrapper">
            <LiaHourglassEndSolid />
            {
                openNav? 
                <p>Transfer</p>: 
                null
            }
        </div>
        <div className="content_wrapper">
            <GiPayMoney />
            {
                openNav? 
                <p>Deposit</p>: 
                null
            }
        </div>
        <div className="content_wrapper">
            <GiCash />
            {
                openNav? 
                <p>Pay Bills</p>: 
                null
            }
        </div>
        <div className="content_wrapper">
            <MdOutlineHistory />
            {
                openNav? 
                <p>Transaction History</p>: 
                null
            }
        </div>
      </div>
      <div className="sidebar_footer">
      <div className="content_wrapper">
            <CgProfile />
            {
                openNav? 
                <p>Profile</p>: 
                null
            }
        </div>
      <div className="content_wrapper" onClick={handleLogout}>
            <TbLogout2 />
            {
                openNav? 
                <p>Logout</p>: 
                null
            }
        </div>
      </div>
    </div>
  )
}

export default Sidebar
