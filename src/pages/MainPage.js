import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AppBar from '../components/common/AppBar'
import MainCard from '../components/main/MainCard';

const MainPage = () => {
  const [accountList, setAccountList] = useState([]);
  const accessToken = localStorage.getItem('accessToken');
  const userSeqNo = localStorage.getItem('userSeqNo');

  useEffect(() => {
    getUserAccountList();
  },[]);

  const getUserAccountList = () => {
    console.log(userSeqNo)

    const sendData = {
        user_seq_no : userSeqNo
    }

    const option = {
        method : "GET",
        url: `/v2.0/user/me`,
        headers: {
            Authorization : `Bearer ${accessToken}`
        },
        params : sendData
    }
    
    axios(option).then(({data}) => {
        console.log(data);
        setAccountList(data.res_list);
    })

  }

  return (
    <>
        <AppBar title={"메인페이지"}/>
        {accountList.map((account)=>{
            return <MainCard bankName={account.bank_name} fintechUseNo={account.fintech_use_num}></MainCard>
        })}
    </>
  )
}

export default MainPage