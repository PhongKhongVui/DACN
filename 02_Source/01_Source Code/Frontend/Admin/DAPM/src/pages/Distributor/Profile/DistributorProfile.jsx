import { RiMapPinUserLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import Tab from "../components/Tab";

const testImage =
  "https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2019/10/avatar_the-orchard-1000px.jpg";

function DistributorProfile() {
  return (
    <div className="relative">
      <div className="w-full h-[320px] absolute top-0 left-0 bg-gradient-to-t from-[--primary-text-emphasis] to-[--primary] z-0">
        <img
          className="h-full w-full block object-cover object-center opacity-20"
          src="/distributor-bg.png"
        ></img>
      </div>
      <div className="p-6 relative">
        <div className="flex">
          <img
            className="block size-[130px] rounded-full border-4 border-white object-cover object-center bg-white"
            src={testImage}
          ></img>
          <div className="flex justify-between mt-9 w-full">
            <div className="ml-4 ">
              <h1 className="text-2xl font-semibold text-white">The Orchard</h1>
              <div className="flex items-center mt-2">
                <RiMapPinUserLine className="fill-white opacity-50" />
                <h6 className="text-sm ml-2 text-white text-opacity-50">
                  California, United States
                </h6>
              </div>
            </div>
            <div className="flex space-x-6">
              <div className="flex flex-col items-center px-3">
                <h1 className="text-white font-semibold text-2xl">231</h1>
                <h6 className="text-white text-sm mt-2 text-opacity-50">
                  Songs
                </h6>
              </div>
              <div className="flex flex-col items-center px-3">
                <h1 className="text-white font-semibold text-2xl">144</h1>
                <h6 className="text-white text-sm mt-2 text-opacity-50">
                  Albums
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 mt-5">
          <Tab to="/distributor">Overview</Tab>
          <Tab to="/distributor/song">Song</Tab>
          <Tab to="/distributor/album">Album</Tab>
        </div>
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DistributorProfile;
