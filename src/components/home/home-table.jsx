import React, { useEffect, useState } from 'react'
import MyVerticallyCenteredModal from '../modal/modal';
import DataTable from 'react-data-table-component';


const HomeTable = ({users}) => {
const [modalShow, setModalShow] = useState(false);
const [user, setUser] = useState({});
const [search, setSearch] = useState("");
const [filteredUser, setFilteredUser] = useState([]);

useEffect(() => {
    const result = users.filter((user) => {
        return user.nama.toLowerCase().match(search.toLowerCase());
    });
    setFilteredUser(result);
}, [search, users])

const openToggleModal = (user) => {
    setModalShow(true);
    setUser(user);
}



const columns = [
    
    {
        name: 'Nik',
        selector: row => row.nik,
        sortable: true,
    },
    {
        name: 'Nama',
        selector: row => row.nama,
        sortable: true,
        
    },
    {
        name: 'Jabatan',
        selector: row => row.jabatan,
        sortable: true,
        
    },
    {
        name: 'Absens',
        selector: row => row.absens.length,
        sortable: true,
        
    },
    {
				
        cell: (row) => <button className='button is-small is-primary' onClick={() => openToggleModal(row)}>View</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        selector: row => row.nik,
        button: true,
    },
];


    

  return (
    <div>

       

        <DataTable
            columns={columns}
            data={filteredUser}
            pagination
            fixedHeader
            highlightOnHover
            subHeader
            subHeaderComponent={
                <input type='text' placeholder='Serach name this' className='w-25 input'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                >

                </input>
            }
            
        />
           
            <MyVerticallyCenteredModal
                user={user}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
    </div>
  )
}

export default HomeTable