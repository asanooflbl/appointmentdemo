import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App.jsx'
import CalendarPage from './Pages/CalendarPage.jsx';
import Login from './Components/Login/Login.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>

           <Route path="/" element={<Login/>} />
            <Route path="/calendar" element={<CalendarPage />} />
      </Routes>


     
     </BrowserRouter>
   
  </StrictMode>,
)
