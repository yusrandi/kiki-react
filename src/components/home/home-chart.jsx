// import React, { useState, useEffect } from 'react'
import ReactApexChart from "react-apexcharts";
import Chart from 'react-apexcharts';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const HomeChart = ({user}) => {
   
  console.log(`Home Chart User ${user.absens}`);
  const month = ['Januari', 'Februari', 'Maret', 'April', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember']
  

    const series = [{
        name: 'Hadir',
        data: user.absens.map((absen) => absen.hadir)
      },  {
        name: 'Izin',
        data: user.absens.map((absen) => absen.izin)
      }, {
        name: 'Sakit',
        data: user.absens.map((absen) => absen.sakit)
      },{
        name: 'Alpha',
        data: user.absens.map((absen) => absen.alpha)
      },{
        name: 'Izin Tanpa Surat',
        data: user.absens.map((absen) => absen.izinT)
      },{
        name: 'Sakit Tanpa Surat',
        data: user.absens.map((absen) => absen.sakit1)
      },{
        name: 'Cuti',
        data: user.absens.map((absen) => absen.cuti)
      },
    
    ];

    const  options = {
        chart: {
          type: 'bar',
          height: 350,
          
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        xaxis: {
          categories: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "Oktober", "November", "Desember"]
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'right',
          offsetX: 0,
          offsetY: 50
        },
      };

    
      const donut = {
        options: {
          dataLabels: {
            enabled: true,
           
          }
        },
        
        series: [44, 55, 41],
        labels: ['A', 'B', 'C', 'D', 'E', 'F']
      }
    

    
  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>

      <div className="columns is-multiline mt-5">
            {user.absens.map((absen, index) => (
                <div className="column is-one-third" key={index}>
                    <div className="card">
                       
                        <div className="card-content">
                            <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{month[index]}</p>
                                
                                <div className="donut">
                                  <Chart options={donut.options} series={[absen.hadir, absen.izin, absen.sakit, absen.alpha, absen.izinT, absen.sakit1, absen.cuti]} labels={donut.labels} type="donut" width="350" />
                                </div>
                            </div>
                            </div>   
                        </div>
                       
                    </div>
                </div>
            ))}
        </div>
      
      {/* <Row>
              <Col xs={6} md={4}>
                Januari
                <div className="donut">
        <Chart options={donut.options} series={donut.series} labels={donut.labels} type="donut" width="250" />
      </div>
              </Col>
              <Col xs={6} md={4}>
                Februari
                <div className="donut">
        <Chart options={donut.options} series={donut.series} labels={donut.labels} type="donut" width="250" />
      </div>
              </Col>
              <Col xs={6} md={4}>
                Maret
                <div className="donut">
        <Chart options={donut.options} series={donut.series} labels={donut.labels} type="donut" width="250" />
      </div>
              </Col>
            </Row> */}
    </div>
  )
}

export default HomeChart