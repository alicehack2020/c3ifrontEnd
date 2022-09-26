import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from "./components/pages/HomePage"
import Login from "./components/pages/Auth/Login"
import Register from "./components/pages/Auth/Register"
import Admin from "./components/pages/dashboard/Admin"
import Teacher from "./components/pages/dashboard/Teacher"
import Student from "./components/pages/dashboard/Student"
function App() {
  return (
     <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/admin' element={<Admin/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
      </Routes>
     </>
  );
}

export default App;
