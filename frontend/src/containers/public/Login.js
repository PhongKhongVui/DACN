import React from 'react';
import { Button, InputForm } from '../../components';
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background_login.jpg"; 
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                <h1 className="font-bold uppercase text-2xl mb-3 text-center">Đăng nhập</h1>
                <div className="w-full flex flex-col gap-5">
                    

                    <div className="w-full flex items-center">
                        <div className="h-10 pl-4 flex bg-[#DDE4E4] items-center justify-center rounded-l-[20px] text-gray-500">
                        <FaUserAlt></FaUserAlt>
                        </div>
                        <input type="username" 
                        placeholder={'Tên đăng nhập'}
                        className="outline-none bg-[#DDE4E4] px-4 py-2 w-full rounded-r-[20px] h-10 text-gray-500"/>
                        
                    </div>

                    
                    <div className="w-full flex items-center">
                        <div className="h-10 pl-4 flex bg-[#DDE4E4] items-center justify-center rounded-l-[20px] text-gray-500">
                        <RiLockPasswordFill></RiLockPasswordFill>
                        </div>
                        <input type="password" 
                        placeholder={'Mật khẩu'}
                        className="outline-none bg-[#DDE4E4] px-4 py-2 w-full rounded-r-[20px] h-10 text-gray-500"/>
                        
                    </div>

                    <Button text="Đăng nhập" />
                </div>
                <div className="mt-7 flex items-center justify-between">
                    <small className="text-gray hover:text-black cursor-pointer">Bạn quên mật khẩu</small>
                    <Link to="/register" >
                        <p className="text-gray-500
                         hover:text-black cursor-pointer">Tạo tài khoản mới</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
