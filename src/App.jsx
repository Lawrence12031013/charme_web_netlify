import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home"
import Register from './pages/Register'
import Order from './pages/Order'
import Complete from './pages/CompleteOrder'
import Query from './pages/Query'
import MemberButton from './components/MemberButton';
import Calendar from './pages/Calendar';
// import CompleteOrder from './pages/CompleteOrder'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/memberbutton" element={<MemberButton />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/order" element={<Order />} />
          <Route path="/complete" element={<Complete />} /> 
          <Route path="/query" element={<Query />} /> 
          {/* <Route path="/complete" element={<CompleteOrder />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

