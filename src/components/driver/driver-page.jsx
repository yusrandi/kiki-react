import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import axios from 'axios'
import HomeTable from '../home/home-table'
import UserChartAll from '../home/user-chart-all'
import { MAIN_URL } from '../utils/constant'


const DriverPage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await axios.get(`${MAIN_URL}users/Driver`)
    setUsers(response.data);
    console.log(response);
} 

useEffect( () => {
    getUsers();
},[])


  return (
    <Layout>
         <div className='column'>
         <h1 className="title">Driver</h1>
         <h2 className="subtitle">Jumlah Pegawai {users.length} orang</h2>

            
            <HomeTable users={users}/>
            <UserChartAll role={'Driver'} />

        </div>
    </Layout>
  )
}

export default DriverPage