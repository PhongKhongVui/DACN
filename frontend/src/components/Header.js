import React from "react";
import icons from "../utils/icons";
import { Link } from "react-router-dom";
import { Search , Button } from "./";

const {HiArrowNarrowLeft, HiArrowNarrowRight} = icons;

const Header = () => {



    return (
        <div className="flex justify-between w-full items-center">
           <div className="flex gap-6 w-full items-center">

                <div className="flex gap-6 text-gray-400">
                    <span><HiArrowNarrowLeft size={24} /> </span>
                    <span><HiArrowNarrowRight size={24}/> </span>
                </div>  

                <div className="w-[440px]">
                   <Search />
                </div>
            </div>

            <Link to="/login">       
                <Button 
                    text={'Đăng nhập'}
                />
            </Link>

        </div>
    );
};

export default Header;  