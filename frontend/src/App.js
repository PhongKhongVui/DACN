import { useState } from "react";

import {Home,Public,Login,Register} from './containers/public';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

import {Routes, Route} from 'react-router-dom';
import {path} from "./utils/path";

import { useEffect } from "react";

import * as actions from './store/actions';

import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getHome());
  }, []);


  return (
    <>
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />} >
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.STAR} element={<Home />} />
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.DANGKY} element={<Register />} />

      </Routes>
    </div>

    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover  
      theme="light"
    />
    </>

  );
}

export default App;
