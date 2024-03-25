import React from "react";
import { useSelector } from "react-redux";

const Player = () => {

    const {currSongId} = useSelector(state => state.music);
    // console.log(currSongId);

    return (
        <div className="bg-main-400 px-5 h-full flex">   
            <div className="w-[30%] flex-auto border border-red-500">
                Details
            </div>

            <div className="w-[40%] flex-auto border border-red-500">
                Main Player
            </div>

            <div className="w-[30%] flex-auto border border-red-500">
                Volume
            </div>

        </div>
    )
};
export default Player;