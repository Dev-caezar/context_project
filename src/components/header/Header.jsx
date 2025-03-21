import React, { useState } from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { FaSearchDollar } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import "./header.css"

const Header = () => {
    const [drop, setDrop] = useState(false)

    const handleDrop =()=>{
        setDrop((prev)=> !prev)
    }
  return (
    <div className='header_body'>
     <div className="header_wrapper">
        <div className="left">
            <div className="profile_img">
                <img src="/src/assets/public/my pics.jpg" alt="" />
            </div>
            <div className="greetings">
                <h4>Greetings!</h4>
                <MdOutlineWavingHand className='wave'/>
            </div>
        </div>
        <div className="right">
            <div className="search">
                <FaSearchDollar />
                <input type="text" className='search_transaction'placeholder='Search transactions, cards, etc'/>
            </div>
            <div className="acct_type" onClick={handleDrop}>
                <MdOutlineAccountCircle className='acct_icon'/>
                <p>Accounts</p>
                <IoIosArrowDown className='acct_icon' style={{ transform: `rotate(${drop ? 180 : 0}deg)` }} />

                {
                    drop? <div className="">
                        <p>Savings</p>
                        <p>Current</p>
                        <p>Dollar</p>
                    </div>:
                    null
                }
            </div>
        </div>
     </div>
    </div>
  )
}

export default Header
