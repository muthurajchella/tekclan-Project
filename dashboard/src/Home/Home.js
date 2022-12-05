import React, { useEffect, useState } from 'react';
import './Home.css';
import Avatar from '@mui/material/Avatar';
import {brown} from '@mui/material/colors';
import Calender from '../Components/Calender';
// import { CircularProgress } from '@mui/material';
import CircularStatic from '../Components/CircularStatic'

import {Line} from 'react-chartjs-2';
import{
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)






const Home = () => {

  const showTime = new Date();
  const displayTime = showTime.getHours()+":"+showTime.getMinutes()+":"+showTime.getSeconds();

  const showDate = new Date();
  const displayDate = showDate.getMonth()+"/"+showDate.getDay()+"/"+showDate.getFullYear();

  const data = {
    labels:["10 Mon", "11 Tue", "12 Wed", "13 Thu", "14 Fri", "15 Sat"],
    datasets:[{
      data: [4, 6, 4, 8, 5.2, 6,],
      backgroundColor: 'transparent',
      borderColor: '#4a0e81',
      pointBorderColor: 'transparent',
      pointBorderWidth: 4,
      tension: 0.4
    }]
  }

  const options = {
      Plugins: {
        legend: false
      },
      scales:{
        x:{
          grid: {
            display: false
          }
        },
        y: {
          min: 2,
          max: 10,
          ticks: {
            stepSize: 2,
            callback: (value) => value + 'hr'
          },
          grid: {
            borderDash: [10]
          }
        }
      }
  }

  const [level, setLevel] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() =>{
  //     setLevel((newLevel) => newLevel >= 60 ? 0 : newLevel + 10);
  //   }, 500);

  //   return () =>{
  //     clearInterval(timer);
  //   }
  // }, []);

  return (
<div>

{/**NavBar Start */}
      <nav>
        <div className='logo'>
          <div className='avatar'>
            <div>
            <Avatar sx={{ bgcolor: brown[900] }} variant="square">
                T
            </Avatar>
            </div>
          </div>
          <div className='logo-con'>
            <div>
              <h1>Task</h1>
              <h2>manager</h2>
            </div>
          </div>
        </div>

        <div className='search'>
          <div className='search-cont'>
            <div className='name'>
            <h1>Hello, <span>Muthu</span></h1>
            </div>     
            <div className='nav-search'>
            <i class='bx bx-search'></i>
            <input type={"search"}  placeholder={"Search"} ></input>
            </div>
          </div>
        </div>


        <div className='settings'>
          <div className='settings-cont'>
            <h1>Today Schedule</h1>
          </div>
          <div className='settings-icons'>
            <div className='nav-ball'>
              <div>
              <i class='bx bx-bell'></i>
              </div>
            </div>
            <div className='nav-setting'>
              <div> <i class='bx bx-cog' ></i></div>
            </div>
          </div>
        </div>
      </nav>
{/**NavBar End */}



<main>
  {/**Profile Section Satrt */}
        <section className='profile'>
          <div className='profile-cont'>
            <div className='profile-img'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF7rNYRqdBhKmsTiW0pes2TrBJnzv7zqbjMp9W9J4cX4XK8jSeUmHBgHrgIt9AmANjxk&usqp=CAU'></img>
            </div>
            <div className='profile-name'>
              <h1>Muthu Raj</h1>
              <a href='muthuraj.chella@gmail.com'>muthuraj.chella@gmail.com</a>
            </div>
          </div>
          <div className='nav-links'>
            <ul>
              <li><a href='#'><i class='bx bxs-dashboard' ></i> Dashboard</a></li>
              <li><a href='#'><i class='bx bx-file'></i> Projects</a></li>
              <li><a href='#'><i class='bx bx-list-ul'></i> tasks</a></li>
              <li><a href='#'><i class='bx bx-calendar-alt'></i> calender</a></li>
              <li><a href='#'><i class='bx bx-user'></i> Teams</a></li>
            </ul>
          </div>
        </section>
  {/**Profile Section End */}

  {/**Overview Start */}
    <section className='overview'>
          <div className='overview-container'>
            <div className='overview-daywork'>
              <div className='overview-daywork-head'>
                <h1>Overview</h1>
              </div>
              <div className='overview-daywork-boxs'>
                <div className='overview-daywork-box1'>
                  <div className='overview-daywork-box1-card'>
                    <div className='box1-count'>
                      <div className='count'>
                        <h1>9</h1>
                      </div>
                      <div className='count-icon'>
                        <a href='#'><i class='bx bx-rotate-left'></i></a>
                      </div>
                    </div>
                    <div className='count-para'>
                      <p>Tasks in progress</p>
                    </div>
                  </div>
                </div>

                <div className='overview-daywork-box1'>
                  <div className='overview-daywork-box1-card'>
                    <div className='box1-count'>
                      <div className='count'>
                        <h1>25</h1>
                      </div>
                      <div className='count-icon'>
                        <a href='#'><i class='bx bx-check-circle'></i></a>
                      </div>
                    </div>
                    <div className='count-para'>
                      <p>Complete Tasks</p>
                    </div>
                  </div>
                </div>

                <div className='overview-daywork-box1'>
                  <div className='overview-daywork-box1-card'>
                    <div className='box1-count'>
                      <div className='count'>
                        <h1>05:35</h1>
                      </div>
                      <div className='count-icon'>
                        <a href='#'><i class='bx bx-alarm-exclamation'></i></a>
                      </div>
                    </div>
                    <div className='count-para'>
                      <p>Today Working Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='overview-chart'>
          <div className='overview-container'>
            <div className='chart-flex'>
              <div className='chart-box1'>
                <div className='chart-box1-cont'>
                  <div className='working-progress-flex'>
                    <div className='working-progress-cont'>
                        <h1>Working Progress</h1>
                    </div>
                    <div className='working-progress-icon'>
                    <i class='bx bx-dots-horizontal-rounded'></i>
                    </div>
                  </div>
                  <div className='progress-para'>
                    <p>Start from june 5-12, 2022</p>
                  </div>
                  <div className='circle-progress'>
                    {/* <CircularProgress variant='determinate' value={level} /> */}

                    <CircularStatic />
                  </div>
                </div>
              </div>

              <div className='chart-box2'>
              <div className='chart-box2-cont'>
                  <div className='working-hour-flex'>
                    <div className='working-hour-cont'>
                        <h1>Working Hours</h1>
                    </div>
                    <div className='working-hour-icon'>
                    <i class='bx bx-dots-horizontal-rounded'></i>
                    </div>
                  </div>
                  <div className='hour-para'>
                    <p>Start from june 5-12, 2022</p>
                  </div>
                  <div>
                  <Line data={data} options={options}></Line>
                  </div>
                  
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='completed-task'>
          <div className='overview-container'>
            <div className='completed-task-flex'>
              <div className='completed-task-head'>
                <div className='completed-task-cont'>
                  <h1>Completed Tasks</h1>
                </div>
                <div className='completed-task-icon'>
                  <a>Weekly <i class='bx bx-chevron-down'></i></a>
                </div>
              </div>

              <div className='complete-task-chart'></div>
            </div>
          </div>
        </div>
    </section>    
  {/**Overview End */}

  {/**Chart Section Start */}
        <section className='dayschedules'>

          <div className='timer'>
            <div className='time-cont'>

                <div className='timeHead'>
                    <h1>Timer</h1>
                    <p><i class='bx bx-dots-horizontal-rounded'></i></p>  
                </div>  
                <div className='showTime'>
                  <div>
                    <input type={'text'} value={displayTime}></input>
                  </div>
                  <div className='time-icon'>
                  <i class='bx bx-pause-circle'></i>
                  <i class='bx bx-stop-circle'></i>
                  </div>
                </div>            
            </div>
          </div>

          <div className='calender'>
            <div className='calender-box'>
              <div className='calender-card'>
              <Calender />
              
              </div>
            </div>
          </div>
        </section>
  {/**Chart Section End */}
</main>

</div>
  )
}

export default Home