// import React, { useState, useEffect } from 'react'
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from 'axios'
import { MAIN_URL } from "../utils/constant";



const UserChartAll = ({role}) => {
  const [bulan, setBulan] = useState('01');
  const [allabsens, setAllabsens] = useState([]);
  const [absens, setAbsens] = useState([]);

  const getAbsens = async() => {
    // setBulan(bulan);
    const response = await axios.get(`${MAIN_URL}absens/${role}`)
    setAllabsens(response.data);

    const result = response.data.filter((absen) => {
      return absen.bulan === bulan;
    });
    setAbsens(result)
    console.log(`result ${absens.length}`);

    // const result = response.data.filter((absen) => {
    //   return absen.bulan === bulan;
    // });

    // setAbsens(result);
    // // absens.map((absen) => {
    // //   console.log(absen.bulan);
    // // })

    // console.log(absens.length);

  } 

  useEffect(() => {
    getAbsens();
  },[])

  const filteredData = (bulan) => {
    setBulan(bulan);
    const result = allabsens.filter((absen) => {
        return absen.bulan === bulan;
      });
      setAbsens(result);
    console.log(absens);
  }
  const data = {
    series: [{
      name: 'Kehadiran',
      data: absens.map((absen) => ((
        absen.hadir + absen.alpha+ absen.cuti+ absen.libur+ absen.setengah+ absen.off
        )/ absen.kerja).toFixed(2) * 100),
    }],
    options: {
      colors:['#00C4A7', '#E91E63', '#9C27B0'],
      chart: {
        height: 350,
        type: 'bar',

      },
      plotOptions: {
        bar: {
        color: "#304758",
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: absens.map((absen) => absen.userNik),
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      
      },
      // title: {
      //   text: 'Monthly Inflation in Argentina, 2002',
      //   floating: true,
      //   offsetY: 330,
      //   align: 'center',
      //   style: {
      //     color: '#444'
      //   }
      // }
    },
  
  
  };

  return (
    <div>
       <div className="column">
                        <div className="field">
                            <div className="control">
                                <div className=" select">
                                    <select value={bulan} onChange={(e) => filteredData(e.target.value)}>
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

      <div id="chart">
        <ReactApexChart options={data.options} series={data.series} type="bar" height={350} />
      </div>
    </div>
    
  )
}

export default UserChartAll