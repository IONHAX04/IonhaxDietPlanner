import './App.css'
import Login from './Components/11 - Login/11 - 01 - Login/Login'
import SignUp from './Components/11 - Login/11 - 02 - SignUp/SignUp'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Container from './Container'
import Calculator from './Components/08 - Calculator/Calculator';
import Community from './Components/10 - CommunitySupport/Community.jsx';

import Progress from './Components/04 - ProgressTracking/Progress.jsx';
import ShoppingCart from './Components/Z - Drafts/ShoppingCart';
import Personalize from './Components/05 - PersonalizeDiet/Personalize.jsx';
import Integration from './Components/06 - IntegrationFitness/Integration';
import Nutrition from './Components/02 - NutritionalInfo/Nutrition.jsx';
import Goals from './Components/03 - Goals/Goals';
import Home from './Components/1002 - Axios Concepts/Home';
import Create from './Components/1002 - Axios Concepts/Create';
import Update from './Components/1002 - Axios Concepts/Update';

import { AuthProvider } from './AuthProvider';
import ShoppingListSuggestions from './Components/07 - ShoppingList/ShoppingListSuggestions';
import HomePage from './Components/01 - Home/HomePage';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />

            <Route path='/homePage' element={<HomePage />} />
            <Route path='/progress' element={<Progress />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/community' element={<Community />} />


            <Route path='/personalize' element={<Personalize />} />
            <Route path='/integration' element={<Integration />} />
            <Route path='/nutritionInfo' element={<Nutrition />} />
            <Route path='/shoppingList' element={<ShoppingListSuggestions />} />
            <Route path='/goals' element={<Goals />} />

            <Route path="/draft" element={<ShoppingCart />} />

            <Route path="/axios" element={<Home />} />
            <Route path='/createAxios' element={<Create />} />
            <Route path='/editAxios/:id' element={<Update />} />




          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}


export default App