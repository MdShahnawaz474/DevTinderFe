
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Body from './components/Body'
import EditProfiles from './components/Edit-profile'
import Matches from './components/Matches'
import Request from './components/Request'

function App() {

  return (

    <Provider store={appStore}><BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Body/>} >
      <Route path='/login' element={<Login/>} />
      <Route path='/edit-profile' element={<EditProfiles/>}/>
      <Route path='/feed' element={<Profile/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/matches' element={<Matches/>} />
      <Route path='/requests' element={<Request/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    
  )
}

export default App
