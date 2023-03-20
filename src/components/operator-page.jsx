import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HomeTable from './home/home-table';
import UserChartAll from './home/user-chart-all';
import Layout from './layout'
import { MAIN_URL } from './utils/constant';

const OperatorPage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
      const response = await axios.get(`${MAIN_URL}users/Operator`)
      setUsers(response.data);
      console.log(response);
  } 

  useEffect( () => {
      getUsers();
  },[])


  return (
    <Layout>
         <div className='column'>
            <h1 className="title">Operator</h1>
            <h2 className="subtitle">Jumlah Pegawai {users.length} orang</h2>

            <HomeTable users={users}/>
            <UserChartAll role={'Operator'} />


        </div>
    </Layout>
  )
}

export default OperatorPage