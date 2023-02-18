import React, { useState } from 'react'
import Layout from '../layout'
import { read, utils } from 'xlsx';
import axios from 'axios';




const InputPegawaiPage = () => {

    const [movies, setMovies] = useState([]);
    const [label, setLabels] = useState('');
    const [alert, setAlert] = useState(false);
    const [role, setRole] = useState('');

    const handleImport = ($event) =>  {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const ext = getExtension(file.name)
            console.log(`file name ${file.name} ext ${ext}`);
            setLabels(file.name);
            if (ext === 'xlsx') {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const wb = read(event.target.result);
                    const sheets = wb.SheetNames;

                    if (sheets.length) {
                        const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                        setMovies(rows)
                    }
                }
                reader.readAsArrayBuffer(file);
            }else{
                console.log('File is not a spreadsheet');
                setLabels('File is not a spreadsheet');

            }
            
        }


    }
    function getExtension(filename) {
        return filename.split(".").pop();
    }
    console.log(`movies lenghth ${movies.length}`);
    // if (movies.length !== 0){
    //     movies.map(async (movie) => {
    //             // <div key={key}>{value}</div>
    //             console.log(movie.nama);
    //             const str = JSON.stringify(movie);
    //             const obj = JSON.parse(str);
    //             console.log(`nama ${obj.nama}`);


    //             try {
                   
    //             } catch (error) {
    //                 console.log(error);
    //             }
                
    //         })
    // }

    const createPegawai = async (e) => {
        e.preventDefault();
        console.log(`Role ${role}`);
        if (movies.length !== 0){
            movies.map(async (movie) => {
                    // <div key={key}>{value}</div>
                    const str = JSON.stringify(movie);
                    const obj = JSON.parse(str);
                    console.log(`nik ${obj.hadir}`);
    
    
                    try {
                        
                         await axios.post("https://kikibackend.albhm.com/users",{
                            nik: movie.nik,
                            nama: movie.nama,
                            jabatan: movie.jabatan,
                            role: role,
                    })

                    setAlert(true);
        
                    } catch (error) {
                        console.log(error);
                    }
                    
                })
    
        
        }
    }

  return (
    <Layout>
         <div className='column'>
            {alert && <div className="notification is-primary">
                <button className="delete" onClick={() => setAlert(false)} ></button>
                Export Ke Database  <strong>Success !</strong>
            </div>
            }

                <h1 className="title">Pegawai</h1>
                <h2 className="subtitle">Input data pegawai</h2>
                <div className="columns">
                    <div className="column is-four-fifths">
                        <div className="file has-name is-fullwidth">
                            <label className="file-label">
                                <input className="file-input" type="file" onChange={handleImport}/>
                                <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">
                                    Choose a file…
                                </span>
                                </span>
                                <span className="file-name">
                                {label}
                                </span>
                            </label>
                        </div>
                        
                    </div>
                   
                    <div className="column">
                        <div className="field">
                            <div className="control">
                                <div className=" select">
                                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                                        <option > Pilih Role</option>
                                        <option value="MUT ALL IN"> MUT ALL IN</option>
                                        <option value="Operator"> Operator</option>
                                        <option value="Driver"> Driver</option>
                                        <option value="Mekanik"> Mekanik</option>
                                        <option value="Infra"> Infra</option>
                                        <option value="Housing BEP"> Housing BEP</option>
                                        <option value="BEP"> BEP</option>
                                        <option value="Magang"> Magang</option>
                                        
                                    </select>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <button onClick={createPegawai} className="button is-primary" type='submit'>Export to Database</button>
                        </div>
                    </div>
                </div>
            

                    
                   
                
               
                
                {/* <div className="field">
                <input type='text' placeholder='Serach name this' className='w-25 input'>

                </input>
                </div> */}

                      
        </div>
    </Layout>
  )
}

export default InputPegawaiPage