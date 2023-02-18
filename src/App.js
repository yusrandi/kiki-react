import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BepPage from './components/bep-page';
import DriverPage from './components/driver/driver-page';
import HomePage from './components/home/home-page';
import HousingPage from './components/housing-page';
import InfraPage from './components/infra-page';
import InputAttendancePage from './components/input/input-attendance';
import InputPegawaiPage from './components/input/input-pegawai';
import MekanikPage from './components/mekanik-page';
import OperatorPage from './components/operator-page';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/operator' element={<OperatorPage/>}></Route>
          <Route path='/driver' element={<DriverPage/>}></Route>
          <Route path='/mekanik' element={<MekanikPage/>}></Route>
          <Route path='/infra' element={<InfraPage/>}></Route>
          <Route path='/housing' element={<HousingPage/>}></Route>
          <Route path='/bep' element={<BepPage/>}></Route>
          <Route path='/input/pegawai' element={<InputPegawaiPage/>}></Route>
          <Route path='/input/attendance' element={<InputAttendancePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
