import React, { useState } from 'react'
import Layout from '../layout'
import { read, utils } from 'xlsx';
import axios from 'axios'
import { MAIN_URL } from '../utils/constant';


const ABSEN_STORE = `${MAIN_URL}absens`;

const InputAttendancePage = () => {

    const [movies, setMovies] = useState([]);
    const [label, setLabels] = useState('');
    const [bulan, setBulan] = useState('');
    const [alert, setAlert] = useState(false);


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
    
    const createAbsens = async (e) => {
        e.preventDefault();
        console.log(`bulan ${bulan}`);
        if (movies.length !== 0){
            movies.map(async (movie) => {
                    // <div key={key}>{value}</div>
                    const str = JSON.stringify(movie);
                    const obj = JSON.parse(str);
                    console.log(`nik ${obj.izinT}`);
    
    
                    try {
                            await axios.post(ABSEN_STORE,{
                            bulan: bulan,
                            userNik: movie.nik,
                            hadir: movie.hadir === '-' ? 0 : movie.hadir,
                            kerja: movie.kerja === '-' ? 0 : movie.kerja,
                            izin: movie.izin === '-' ? 0 : movie.izin,
                            izinT: movie.izinT === '-' ? 0 : movie.izinT,
                            sakit: movie.sakit === '-' ? 0 : movie.sakit,
                            sakit1: movie.sakit1 === '-' ? 0 : movie.sakit1,
                            alpha: movie.alpha === '-' ? 0 : movie.alpha,
                            cuti: movie.cuti === '-' ? 0 : movie.cuti,
                            resign: movie.resign === '-' ? 0 : movie.resign,
                            libur: movie.libur === '-' ? 0 : movie.libur,
                            setengah: movie.setengah === '-' ? 0 : movie.setengah,
                            off: movie.off === '-' ? 0 : movie.off,
                            isoman: movie.isoman === '-' ? 0 : movie.isoman
                            
                            })
                        
                    setAlert(true);

                        
            
                    } catch (error) {
                        console.log(error);
                    }
                    
                })
    
        
        }
    }

    console.log(`movies lenghth ${movies.length}`);
    // if (movies.length !== 0){
        // movies.map(async (movie) => {
        //         // <div key={key}>{value}</div>
        //         console.log(movie.nama);
        //         const str = JSON.stringify(movie);
        //         const obj = JSON.parse(str);
        //         console.log(`nama ${obj.nama}`);


        //         try {
        //             // await axios.post("http://localhost:5005/users",{
        //             //     nik: movie.nik,
        //             //     nama: movie.nama,
        //             //     jabatan: movie.jabatan,
        //             //     role: 'Driver',
        //             // })
        
        //         } catch (error) {
        //             console.log(error);
        //         }
                
        //     })

    
    // }

  return (
    <Layout>
         <div className='column'>
                <h1 className="title">Absen</h1>
                <h2 className="subtitle">Input data Absen</h2>

                {alert && <div className="notification is-primary">
                <button className="delete" onClick={() => setAlert(false)} ></button>
                Export Ke Database  <strong>Success !</strong>
            </div>
            }


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
                                    <select value={bulan} onChange={(e) => setBulan(e.target.value)} >
                                        <option >Pilih Bulan</option>
                                        <option value="01">Januari</option>
                                        <option value="02">Februari</option>
                                        <option value="03">Maret</option>
                                        <option value="04">April</option>
                                        <option value="05">Mei</option>
                                        <option value="06">Juni</option>
                                        <option value="07">Juli</option>
                                        <option value="08">Agustus</option>
                                        <option value="09">September</option>
                                        <option value="10">Oktober</option>
                                        <option value="11">Nopember</option>
                                        <option value="12">Desember</option>
                                        
                                    </select>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <button onClick={createAbsens} className="button is-primary" type='submit'>Export to Database</button>
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

export default InputAttendancePage