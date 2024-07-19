import { Radio } from "antd";
import { StatusButton } from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { useState } from "react";

function Filter({ pending, handleChange }) {
  const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
  const [status, setStatus] = useState("APPROVAL_PENDING");
  const [selectedItems, setSelectedItems] = useState(OPTIONS);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <div className="w-[300px] min-w-[300px] min-h-[300px] bg-white rounded-md shadow-default p-6 h-fit">
      <div className="flex">
        <Input placeholder="Search by name, alias, id..." className="text-xs" />
      </div>
      <h3 className="mt-4 text-sm font-medium">Song status</h3>
      <div className="grid grid-cols-3 gap-x-2 mt-3">
        <div className="relative">
          <StatusButton
            onClick={() => setStatus("APPROVAL_PENDING")}
            active={status == "APPROVAL_PENDING"}
          >
            Pending
          </StatusButton>
          {pending > 0 && (
            <div className="absolute -top-[6px] -right-[6px] px-1.5 bg-red-500 text-[9px] rounded-full text-white text-center">
              {pending}
            </div>
          )}
        </div>
        <StatusButton
          onClick={() => setStatus("APPROVED")}
          active={status == "APPROVED"}
        >
          Published
        </StatusButton>
        <StatusButton
          onClick={() => setStatus("REJECTED")}
          active={status == "REJECTED"}
        >
          Rejected
        </StatusButton>
      </div>
      <h3 className="mt-4 mb-3 text-sm font-medium">Country</h3>
      <Select
        fontSize={12}
        height={32}
        mode="multiple"
        placeholder="Select gengres"
        value={selectedItems}
        onChange={setSelectedItems}
        className="w-full"
        options={filteredOptions.map((item) => ({
          value: item,
          label: item,
        }))}
      />
      <h3 className="mt-4 mb-2 text-sm font-medium">Sort</h3>
      <div className="flex-col space-y-2">
        <div className="flex items-center">
          <h6 className="text-xs w-[100px] min-w-[100px] mr-3">Name</h6>
          <Radio.Group name="radiogroup" className="w-full">
            <div className="grid grid-cols-2">
              <Radio value={2}>
                <span className="text-xs">a-z</span>
              </Radio>
              <Radio value={1}>
                <span className="text-xs">z-a</span>
              </Radio>
            </div>
          </Radio.Group>
        </div>
      </div>
      <div className="flex-col space-y-2 mt-2">
        <div className="flex items-center">
          <h6 className="text-xs w-[100px] min-w-[100px] mr-3">Total song </h6>
          <Radio.Group name="radiogroup" className="w-full">
            <div className="grid grid-cols-2">
              <Radio value={2}>
                <span className="text-xs">Asc</span>
              </Radio>
              <Radio value={1}>
                <span className="text-xs">Des</span>
              </Radio>
            </div>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
}

export default Filter;
