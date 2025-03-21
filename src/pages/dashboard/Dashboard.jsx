import React, { useState } from 'react';
import "./dashboard.css";
import {Table, Tag } from 'antd';
import { CiMenuKebab } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const columns = [
  {
    title: 'Sender',
    dataIndex: 'sender',
    key: 'sender',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Tag color={status === "Success" ? "green" : "red"}>{status}</Tag>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

const data = [
  { key: 1, sender: 'John Brown', amount: 32, status: 'Success', date: "10 Feb 2024" },
  { key: 2, sender: 'Jim Green', amount: 42, status: 'Pending', date: "10 Feb 2024" },
  { key: 3, sender: 'Not Expandable', amount: 29, status: 'Success', date: "10 Feb 2024" },
  { key: 4, sender: 'Not Expandable', amount: 29, status: 'Pending', date: "10 Feb 2024" },
  { key: 5, sender: 'Not Expandable', amount: 29, status: 'Pending', date: "10 Feb 2024" },
  { key: 6, sender: 'Not Expandable', amount: 29, status: 'Success', date: "10 Feb 2024" },
  { key: 7, sender: 'Not Expandable', amount: 29, status: 'Success', date: "10 Feb 2024" },
  { key: 8, sender: 'Not Expandable', amount: 29, status: 'Success', date: "10 Feb 2024" },
  { key: 9, sender: 'Not Expandable', amount: 29, status: 'Success', date: "10 Feb 2024" },
  { key: 10  , sender: 'Not Expandable', amount: 29, status: 'Success', date: "10 Feb 2024" },
];

const Dashboard = () => {
  const [show,setShow]= useState(false)

  const handleShowAmount =()=>{
    setShow((prev)=> !prev)
  }
  const [back,setBack]= useState(false)

  const handleDisplayAmount =()=>{
    setBack((prev)=> !prev)
  }
  return (
    <div className='dashboardBody'>
      <div className="acct_details">
        <div className="details_header">
          <h2>Cards</h2>
          <h4>See all</h4>
        </div>
        <div className="card_container">
          <div className="card_front">
            <div className="card_header">
              <CiMenuKebab />
            </div>
            <div className="card_amount">
                {
                  show? 
                  <h4>$5,000.00</h4>:
                  <h4>****</h4>
                }
              </div>
              <div className="card_date">
                <div className="date">
                <p>20/05/2025</p>
                {
                  show?
                  <FaRegEyeSlash  onClick={handleShowAmount}/> :
                  <FaRegEye onClick={handleShowAmount}/>
                }
                </div>
                <div className="card_type">
                  <p>VISA</p>
                </div>
              </div>
          </div>
          <div className="card_back">
          <div className="card_header">
              <CiMenuKebab />
            </div>
            <div className="card_amount">
                {
                  back? 
                  <h4>#21,420.00</h4>:
                  <h4>****</h4>
                }
              </div>
              <div className="card_date">
                <div className="date">
                <p>10/12/2025</p>
                {
                  back?
                  <FaRegEyeSlash  onClick={handleDisplayAmount}/> :
                  <FaRegEye onClick={handleDisplayAmount}/>
                }
                </div>
                <div className="card_type">
                  <p>VERVE</p>
                </div>
              </div>
          </div>
        </div>
        <div className="acct_table">
          <h4>Recent transactions</h4>
          <Table 
            columns={columns} 
            dataSource={data} 
            pagination={{ pageSize: window.innerWidth < 400 ? 5 : 4}} 
            scroll={{ x: true }} 
          />
        </div>
      </div>
      <div className="chart"></div>
    </div>
  );
};

export default Dashboard;
