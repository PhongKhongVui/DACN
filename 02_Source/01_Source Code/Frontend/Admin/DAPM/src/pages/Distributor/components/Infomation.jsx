import { HiOutlineExternalLink } from "react-icons/hi";

function Information({ info }) {
  return (
    <div className="w-full bg-[--secondary-bg] shadow-default rounded-md p-6">
      <h3 className="font-medium text-[--body-color] text-slate-800 leading-[100%] mb-6">
        Information
      </h3>
      <div className="grid grid-cols-12 gap-y-1 gap-x-3">
        <div className="col-span-4 h-10">
          <h6 className="text-sm font-medium">Distributor name</h6>
        </div>
        <div className="col-span-8">
          <h6 className="text-sm text-slate-600">The Orchard</h6>
        </div>
        <div className="col-span-4 h-10">
          <h6 className="text-sm font-medium">Website:</h6>
        </div>
        <div className="col-span-8">
          <a className="flex text-[--link-color] cursor-pointer hover:underline items-center">
            <h6 className="text-sm mr-1 truncate max-w-full">
              www.theorchard.comdsff
            </h6>
            <HiOutlineExternalLink className="w-3.5 min-w-3.5" />
          </a>
        </div>
        <div className="col-span-4 h-10">
          <h6 className="text-sm font-medium">E-mail:</h6>
        </div>
        <div className="col-span-8">
          <h6 className="text-sm text-slate-600">info@orchard.com</h6>
        </div>
        <div className="col-span-4 h-10">
          <h6 className="text-sm font-medium">Phone:</h6>
        </div>
        <div className="col-span-8">
          <h6 className="text-sm text-slate-600">(+1)982412321</h6>
        </div>
        <div className="col-span-4 h-10">
          <h6 className="text-sm font-medium">Location:</h6>
        </div>
        <div className="col-span-8">
          <h6 className="text-sm text-slate-600">California, United States</h6>
        </div>
        <div className="col-span-4 h-10">
          <h6 className="text-sm font-medium">Contract:</h6>
        </div>
        <div className="col-span-8">
          <a className="flex text-[--link-color] cursor-pointer hover:underline items-center">
            <h6 className="text-sm mr-1 truncate max-w-full">
              ZingMP3-The-Orchard-Contract.pdf
            </h6>
            <HiOutlineExternalLink className="w-3.5 min-w-3.5" />
          </a>
        </div>
        <div className="col-span-4 h-10">
          <h6 className="text-sm font-medium">Termination date</h6>
        </div>
        <div className="col-span-8">
          <h6 className="text-sm text-slate-600">Mar 05 2025</h6>
        </div>
      </div>
    </div>
  );
}

export default Information;
