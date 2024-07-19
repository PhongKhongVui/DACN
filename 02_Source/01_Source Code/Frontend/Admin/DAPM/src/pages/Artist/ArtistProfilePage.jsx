import { RiMapPinUserLine } from "react-icons/ri";
import { Outlet, useParams } from "react-router-dom";
import Tab from "./components/Tab";
import { FaRegEdit } from "react-icons/fa";

const testImage =
  "https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2019/10/avatar_the-orchard-1000px.jpg";

function ArtistProfilePage() {
  const { id } = useParams();

  return (
    <div className="relative">
      <div className="w-full h-[320px] absolute top-0 left-0 bg-gradient-to-t from-[--primary-text-emphasis] to-[--primary] z-0">
        <img
          className="h-full w-full block object-cover opacity-10"
          src="/images/artist-cover.png"
          style={{ objectPosition: "0 80%" }}
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
                  United State
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
        <div className="flex justify-end mt-1">
          <button className="px-3 py-1.5 bg-teal-600 rounded flex items-center text-white hover:brightness-110 text-sm">
            <FaRegEdit />
            <span className="ml-2">Edit</span>
          </button>
        </div>
        <div className="flex space-x-6 mt-[30px]">
          <div className="w-[300px] min-w-[300px] bg-white rounded-md shadow-default h-fit">
            <h3 className="text-sm font-medium px-6 py-4 border-b border-gray-300">
              Information
            </h3>
            <div className="grid grid-cols-12 text-[13px] p-6 gap-1">
              <h6 className="font-medium col-span-5 min-h-[40px]">
                Real name:
              </h6>
              <h6 className="col-span-7">Lana Del Rey</h6>
              <h6 className="font-medium col-span-5 min-h-[40px]">
                Alias name:
              </h6>
              <h6 className="col-span-7">Lana Del Rey</h6>
              <h6 className="font-medium col-span-5 min-h-[40px]">Email:</h6>
              <h6 className="col-span-7">Lana Del Rey</h6>
              <h6 className="font-medium col-span-5 min-h-[40px]">Phone:</h6>
              <h6 className="col-span-7">Lana Del Rey</h6>
              <h6 className="font-medium col-span-5 min-h-[40px]">
                Nationality:
              </h6>
              <h6 className="col-span-7">Lana Del Rey</h6>
              <h6 className="font-medium col-span-5 min-h-[40px]">
                Profile ID:
              </h6>
              <h6 className="col-span-7">Lana Del Rey</h6>
            </div>
          </div>
          <div className="w-full bg-white rounded-md shadow-default overflow-hidden">
            <div className="flex border border-gray-300">
              <Tab to={"/artist/" + id}>Song</Tab>
              <Tab to={"/artist/" + id + "/album"}>Album</Tab>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistProfilePage;
