import { IoSettingsOutline } from "react-icons/io5";
import {
  PopoverContent,
  PopoverHandler,
  Popover,
} from "../../../components/Popover";
import { RxInfoCircled } from "react-icons/rx";

function UserMenu() {
  return (
    <Popover placement="bottom-end" offset={[0, 1]}>
      <PopoverHandler>
        <button className="ml-2.5 h-full flex items-center px-2.5 bg-indigo-200 bg-[--sidebar-bg] bg-opacity-30 cursor-pointer">
          <img className="block size-9 rounded-full bg-[--sidebar-bg]"></img>
          <div className="select-none ml-2.5 flex flex-col items-start">
            <h3 className="text-sm font-semibold text-[--text-primary]">
              Hien Thai
            </h3>
            <span className="text-xs text-[--text-secondary]">
              Ultimate Admin
            </span>
          </div>
        </button>
      </PopoverHandler>
      <PopoverContent>
        <div className="w-[250px] bg-[--primary-bg] rounded-md shadow p-2">
          <div className="flex items-center p-2.5">
            <img className="block size-10 rounded-full bg-[--sidebar-bg]"></img>
            <div className="select-none ml-2.5 flex flex-col">
              <h3 className="text-sm font-semibold text-[--text-primary]">
                Hien Thai
              </h3>
              <span className="text-xs text-[--text-secondary]">
                hienthai@gmail.com
              </span>
            </div>
          </div>
          <ul>
            <li className="hover:bg-[--btn-hover-bg] rounded">
              <button className="px-2.5 py-2 w-full flex items-center text-[--text-secondary] hover:text-[--text-primary]">
                <div className="size-5 mr-2.5">
                  <IoSettingsOutline className="size-5" />
                </div>
                <span className="text-[15px] leading-normal">
                  Account setting
                </span>
              </button>
            </li>
            <li className="hover:bg-[--btn-hover-bg] rounded">
              <button className="px-2.5 py-2 w-full flex items-center text-[--text-secondary] hover:text-[--text-primary]">
                <div className="size-5 mr-2.5">
                  <RxInfoCircled className="size-5" />
                </div>
                <span className=" text-[15px] leading-normal">Policies</span>
              </button>
            </li>
            <li>
              <div className="border-t border-[-border-secondary] mx-2.5 my-2"></div>
            </li>
            <li className="p-2">
              <button className="px-2.5 py-2 w-full flex items-center justify-center text-white bg-[--primary] rounded">
                <span className="font-medium text-[15px]">Log out</span>
              </button>
            </li>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default UserMenu;
