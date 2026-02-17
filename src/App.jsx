import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Plans from './pages/Plans'
import Login from './pages/Login'
import Signup from './pages/Signup'
import TutorsList from './pages/TutorsList'
import TutorRegister from './pages/TutorRegister'
import ChooseRole from './pages/ChooseRole'
import StudentRegister from './pages/StudentRegister'
import Subscription from './pages/Subscription'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/role-selection' element={<ChooseRole />} />
        <Route path='/tutors' element={<TutorsList />} />
        <Route path='/register-tutor' element={<TutorRegister />} />
        <Route path='/register-student' element={<StudentRegister />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path='*' element={"404 Not Found"} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
