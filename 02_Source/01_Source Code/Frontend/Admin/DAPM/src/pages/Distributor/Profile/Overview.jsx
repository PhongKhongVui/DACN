import { HiOutlineExternalLink } from "react-icons/hi";
import { BiUserPlus } from "react-icons/bi";
import Tooltip from "../../../components/Tooltip";
import { IconButton } from "../../../components/Button";
import { useState } from "react";
import { Modal } from "antd";
import Input from "../../../components/Input";
import StaffForm from "../components/StaffForm";

function Overview() {
  const [addStaff, setAddStaff] = useState(false);

  return (
    <div className="flex space-x-6">
      <div className="w-full min-w-[600px]">
        <div className="bg-white shadow-default p-6 rounded-md">
          <h3 className="font-medium text-lg text-[--body-color] text-slate-800 leading-[100%] mb-8">
            Information
          </h3>
          <div className="grid grid-cols-12 gap-y-1 gap-x-3">
            <div className="col-span-2 h-10">
              <h6 className="text-sm font-medium">Distributor name:</h6>
            </div>
            <div className="col-span-4">
              <h6 className="text-sm text-slate-600">The Orchard</h6>
            </div>
            <div className="col-span-2 h-10">
              <h6 className="text-sm font-medium">Website:</h6>
            </div>
            <div className="col-span-4">
              <a className="flex text-[--link-color] cursor-pointer hover:underline items-center">
                <h6 className="text-sm mr-1 truncate max-w-full">
                  www.theorchard.com
                </h6>
                <HiOutlineExternalLink className="w-3.5 min-w-3.5" />
              </a>
            </div>
            <div className="col-span-2 h-10">
              <h6 className="text-sm font-medium">E-mail:</h6>
            </div>
            <div className="col-span-4">
              <h6 className="text-sm text-slate-600">info@orchard.com</h6>
            </div>
            <div className="col-span-2 h-10">
              <h6 className="text-sm font-medium">Phone:</h6>
            </div>
            <div className="col-span-4">
              <h6 className="text-sm text-slate-600">(+1)982412321</h6>
            </div>
            <div className="col-span-2 h-10">
              <h6 className="text-sm font-medium">Location:</h6>
            </div>
            <div className="col-span-4">
              <h6 className="text-sm text-slate-600">
                California, United States
              </h6>
            </div>
            <div className="col-span-2 h-10">
              <h6 className="text-sm font-medium">Contract:</h6>
            </div>
            <div className="col-span-4">
              <a className="flex text-[--link-color] cursor-pointer hover:underline items-center">
                <h6 className="text-sm mr-1 truncate max-w-full">
                  ZingMP3-The-Orchard-Contract.pdf
                </h6>
                <HiOutlineExternalLink className="w-3.5 min-w-3.5" />
              </a>
            </div>
            <div className="col-span-2 h-10">
              <h6 className="text-sm font-medium">Termination date:</h6>
            </div>
            <div className="col-span-4">
              <h6 className="text-sm text-slate-600">Mar 05 2025</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[320px] min-w-[320px]">
        <div className="bg-white shadow-default rounded-md p-6 h-full">
          <h3 className="font-medium text-[--body-color] text-slate-800 leading-[100%] mb-4">
            Admin
          </h3>
          <div className="flex">
            <div className="">
              <img
                className="size-9 rounded-full shadow object-cover object-center"
                src="https://vocrecords.vn/wp-content/uploads/2021/04/EVP602537181223-0.jpg"
              ></img>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-[--body-color] text-slate-800 leading-[100%] mb-4 mt-8">
              Staffs
            </h3>
            <Tooltip content="Add staff">
              <IconButton onClick={() => setAddStaff(true)}>
                <BiUserPlus />
              </IconButton>
            </Tooltip>
            <Modal
              title={
                <h3 className="text-lg font-semibold">Staff register form</h3>
              }
              open={addStaff}
              onCancel={() => setAddStaff(false)}
              footer={null}
              destroyOnClose
              width={400}
            >
              <StaffForm />
            </Modal>
          </div>
          <div className="flex space-x-2 pb-5">
            <div className="">
              <img
                className="size-9 rounded-full shadow object-cover object-center"
                src="https://vocrecords.vn/wp-content/uploads/2021/04/EVP602537181223-0.jpg"
              ></img>
            </div>
            <div className="">
              <img
                className="size-9 rounded-full shadow object-cover object-center"
                src="https://vocrecords.vn/wp-content/uploads/2021/04/EVP602537181223-0.jpg"
              ></img>
            </div>
            <div className="">
              <img
                className="size-9 rounded-full shadow object-cover object-center"
                src="https://vocrecords.vn/wp-content/uploads/2021/04/EVP602537181223-0.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
