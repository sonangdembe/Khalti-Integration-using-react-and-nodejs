
import React, { useState } from 'react'
import { Button, Layout,Flex } from 'antd'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons' 
import Sliderbar from './components/Sliderbar'
import CustomerHeader from './components/Header';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';
import Banner from './components/Banner';
import LayoutP from './components/LayoutP';
import Payment from './components/Payment'
import Khalti from './components/khalti/Khalti'
import KhaltiKey from './components/khalti/KhaltiKey'
import KhaltiConfig from './components/khalti/KhaltiConfig'
import PaymentKhalti from './components/khalti/PaymentKhalti'
import CancelPayment from './components/khalti/CancelPayment'
import Home from './components/view/Home';
import Login from './components/view/Login';
import SignupForm from './components/view/Signup';
import './App.css';

const App = () => {
  return (
    <>


    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/dashboard' element={<LayoutP />} />
          <Route path='/payment' element={<Payment />} />
          
           <Route path='/paymentKhalti' element={<PaymentKhalti />} />
           <Route path='/cancelPayment' element= {<CancelPayment />} />
        </Routes>
    </Router>

</>

  )
};

export default App
