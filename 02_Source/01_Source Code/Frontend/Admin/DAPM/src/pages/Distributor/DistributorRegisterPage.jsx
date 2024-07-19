import { Form } from "antd";
import Input, { DateInput } from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import { useFileUpload } from "../../hooks";

function DistributorRegisterPage() {
  const [avaRef, url, id, reset] = useFileUpload();

  return (
    <div>
      <PageHeader>Distributor Register</PageHeader>
      <div className="p-6">
        <div className="w-[800px] rounded-md bg-white shadow-default mx-auto">
          <h1 className="px-6 py-4 font-medium border-b border-gray-300">
            Register Form
          </h1>
          <Form layout="vertical">
            <div className="px-6 pb-6">
              <h3 className="text-sm font-medium mt-5 mb-3">Information</h3>
              <div className="grid grid-cols-2 mt-2 gap-x-6">
                <Form.Item
                  name="name"
                  label={
                    <span className="inline-block text-[13px] font-medium">
                      Distributor name *
                    </span>
                  }
                  rules={[
                    { required: true, message: "Distributor name is required" },
                  ]}
                  required={false}
                  className="!text-xs"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="website"
                  label={
                    <span className="inline-block text-[13px] font-medium">
                      Website
                    </span>
                  }
                  rules={[
                    { required: true, message: "Artist name is required" },
                  ]}
                  required={false}
                  className="!text-xs"
                >
                  <Input />
                </Form.Item>
                <div className="row-span-3 flex-col">
                  <span className="inline-block mb-2 text-[13px] font-medium">
                    Logo
                  </span>
                  <div className="h-[210px] border border-dashed border-gray-300 rounded p-2">
                    <div className="mx-auto h-full aspect-square rounded-full overflow-hidden relative border-slate-500 shadow-sm group">
                      <img
                        className="size-full object-cover object-center"
                        src={url || "/images/distributor-default-img.jpg"}
                      />
                      <div className="absolute size-full flex items-center justify-center top-0 left-0 bg-black bg-opacity-25 group-[:hover]:visible invisible">
                        <label
                          type="button"
                          className="px-3 py-1.5 bg-gray-300 text-sm rounded opacity-50 hover:brightness-90 cursor-pointer"
                        >
                          <span>Upload</span>
                          <input
                            type="file"
                            className="!hidden"
                            accept="image/*"
                            ref={avaRef}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label>
                    <span className="inline-block mb-2 text-[13px] font-medium">
                      E-mail
                    </span>
                    <Input />
                  </label>
                </div>
                <div>
                  <label>
                    <span className="inline-block mb-2 text-[13px] font-medium">
                      Phone
                    </span>
                    <Input />
                  </label>
                </div>
                <div>
                  <label>
                    <span className="inline-block mb-2 text-[13px] font-medium">
                      Location
                    </span>
                    <Input />
                  </label>
                </div>
                <div>
                  <label>
                    <span className="inline-block mb-2 text-[13px] font-medium">
                      Contract
                    </span>
                    <Input />
                  </label>
                </div>
                <div>
                  <label>
                    <span className="block mb-2 text-[13px] font-medium">
                      Termination date
                    </span>
                    <DateInput className="w-full" />
                  </label>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-sm font-medium mt-4">Admin</h3>
              <div className="grid grid-cols-2 mt-2 gap-y-4 gap-x-6">
                <div>
                  <label>
                    <span className="inline-block mb-2 text-[13px] font-medium">
                      Name *
                    </span>
                    <Input />
                  </label>
                </div>
                <div>
                  <label>
                    <span className="inline-block mb-2 text-[13px] font-medium">
                      Email *
                    </span>
                    <Input />
                  </label>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <h6 className="text-xs font-light italic">
                - * is marked as a must field
              </h6>
              <div className="flex justify-end mt-6">
                <button className="px-3 py-1.5 bg-[--primary] font-medium text-sm rounded hover:brightness-110 text-white">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default DistributorRegisterPage;
