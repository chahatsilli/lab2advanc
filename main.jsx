import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login.jsx'
import NutritionPage from './NutritionPage.jsx'
import Trainer from './Trainer.jsx'
import RecipeSharing from './RecipeSharing.jsx'
import { Button } from 'bootstrap'
import JohnDoe from './JohnDoe.jsx'
import Comments from './comments.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/NutritionPage' Component={NutritionPage}></Route>
        <Route path='/RecipeSharing' Component={RecipeSharing}></Route>
        <Route path='/Trainer' Component={Trainer}></Route>
        <Route path='/JohnDoe' Component={JohnDoe}> </Route>
        <Route path='/comments' Component={Comments}></Route>
        </Routes>
    </BrowserRouter>

  </StrictMode>,
)

