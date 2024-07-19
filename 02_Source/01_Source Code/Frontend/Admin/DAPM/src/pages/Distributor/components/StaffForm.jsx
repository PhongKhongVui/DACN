import { Button } from "../../../components/Button";
import Input from "../../../components/Input";

function StaffForm({ onSuccess }) {
  return (
    <div className="mt-5">
      <div className="flex justify-center">
        <img className="size-[100px] rounded-full border-4 border-gray-300 bg-cyan-600"></img>
      </div>
      <form>
        <div>
          <label className="text-sm font-medium mb-2 block">Staff name</label>
          <Input />
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium mb-2 block">Email</label>
          <Input />
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium mb-2 block">Password</label>
          <Input type="password" />
        </div>
        <button className="h-[38px] w-full flex items-center justify-center rounded mt-6 mb-5 bg-[--primary] text-white font-medium">
          Register
        </button>
      </form>
    </div>
  );
}

export default StaffForm;
