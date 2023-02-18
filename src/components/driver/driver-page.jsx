import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import axios from 'axios'
import HomeTable from '../home/home-table'


const DriverPage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await axios.get("https://kikibackend.albhm.com/users/Driver")
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
        </div>
    </Layout>
  )
}

export default DriverPage