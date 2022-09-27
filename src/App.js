import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from "./components/pages/HomePage"
import Login from "./components/pages/Auth/Login"
import Register from "./components/pages/Auth/Register"
import Admin from "./components/pages/dashboard/Admin"
import Teacher from "./components/pages/dashboard/Teacher"
import Student from "./components/pages/dashboard/Student"

import AddTeacher from "./components/pages/dashboard/AddTeacher"
import AddCourse from './components/pages/dashboard/AddCourse';
import VideoList from './components/pages/dashboard/VideoList';
import AddVideo from './components/pages/dashboard/AddVideo';

import StudentVideoList from './components/pages/dashboard/StudentVideoList';
import EnrollCourse from './components/pages/dashboard/EnrollCourse';
import AddStudent from './components/pages/dashboard/AddStudent';

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

        <Route path='/admin/addteacher' element={<AddTeacher/>}/>

        <Route path='/admin/addcourse' element={<AddCourse/>}/>
        <Route path='/admin/videolist/:course_id' element={<VideoList/>}/>
        <Route path='/admin/addvideo/:course_id' element={<AddVideo/>}/>
        <Route path='/admin/addstudent' element={<AddStudent/>}/>

        {/* for teacher */}

        <Route path='/teacher/addcourse' element={<AddCourse/>}/>
        <Route path='/teacher/videolist/:course_id' element={<VideoList/>}/>
        <Route path='/teacher/addvideo/:course_id' element={<AddVideo/>}/>
        <Route path='/teacher/addstudent' element={<AddStudent/>}/>

        {/* for student */}
        <Route path='/student/videolist/:course_id' element={<StudentVideoList/>}/>
        <Route path='/student/enrollcourse/:course_id' element={<EnrollCourse/>}/>
        


      </Routes>
     </>
  );
}

export default App;
