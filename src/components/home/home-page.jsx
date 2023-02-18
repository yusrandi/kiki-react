import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import HomeTable from './home-table';
import axios from 'axios'

const HomePage = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        const response = await axios.get("https://kikibackend.albhm.com/users/MUL ALL IN")
        setUsers(response.data);
        console.log(response);
    } 

    useEffect( () => {
        getUsers();
    },[])

   

    

  return (
    <Layout>
    <div className='column' >

            
            <h1 className="title">MUT ALL IN</h1>
            <h2 className="subtitle">Jumlah Pegawai {users.length} orang</h2>


            <HomeTable users={users}/>
    </div>
    </Layout>
  )
}

export default HomePage