import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HomeTable from './home/home-table';
import Layout from './layout'

const InfraPage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
      const response = await axios.get("https://kikibackend.albhm.com/users/Infra")
      setUsers(response.data);
      console.log(response);
  } 

  useEffect( () => {
      getUsers();
  },[])


  return (
    <Layout>
         <div className='column'>
            <h1 className="title">Infra</h1>
            <h2 className="subtitle">Jumlah Pegawai {users.length} orang</h2>

            <HomeTable users={users}/>

        </div>
    </Layout>
  )
}

export default InfraPage