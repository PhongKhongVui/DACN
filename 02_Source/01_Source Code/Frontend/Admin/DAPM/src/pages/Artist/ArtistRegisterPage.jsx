import { Form } from "antd";
import Input, { DateInput } from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import { useFileUpload } from "../../hooks";
import Select from "../../components/Select";
import { HiOutlineChevronDown } from "react-icons/hi";
import { request } from "../../services/axios";
import { getAlias } from "../../utils/aliasHelper";
import { toast } from "react-toastify";

const COUNTRIES = [
  { label: "Việt Nam", value: "VN" },
  { label: "US/UK", value: "USUK" },
  { label: "Korea", value: "KOR" },
  { label: "Others", value: "OTHERS" },
];

function ArtistRegisterPage() {
  const [avaRef, url, id, reset] = useFileUpload();
  const [form] = Form.useForm();

  function handleSubmit(data) {
    request
      .post("/artists", {
        name: data.name,
        realName: data.realName,
        alias: getAlias(data.name),
        thumbnailId: id,
      })
      .then(() => {
        toast.success("Artist registered successfully");
        form.resetFields();
        reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.message);
      });
  }

  return (
    <div>
      <PageHeader>Artist Register</PageHeader>
      <div className="p-6">
        <div className="rounded-md bg-white shadow-default mx-auto">
          <h1 className="px-6 py-4 font-medium border-b border-gray-300 text-[15px]">
            Register Form
          </h1>
          <Form layout="vertical" onFinish={handleSubmit} form={form}>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-x-6">
                <div className="row-span-3 flex-col">
                  <span className="inline-block mb-2 text-[13px] font-medium">
                    Image
                  </span>
                  <div className="h-[222px] border border-dashed border-gray-300 rounded p-3">
                    <div className="mx-auto h-full aspect-square rounded-full overflow-hidden relative border-slate-500 shadow-sm group">
                      <img
                        className="size-full object-cover object-center"
                        src={url || "/images/artist-default-img.jpg"}
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
                <Form.Item
                  name="name"
                  label={
                    <span className="inline-block text-[13px] font-medium">
                      Artist name *
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
                <Form.Item
                  name="realName"
                  label={
                    <span className="inline-block text-[13px] font-medium">
                      Real name *
                    </span>
                  }
                  rules={[{ required: true, message: "Real name is required" }]}
                  required={false}
                  className="!text-xs"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="dob"
                  label={
                    <span className="block text-[13px] font-medium">
                      Birthday
                    </span>
                  }
                  className="!text-xs"
                >
                  <DateInput className="w-full" />
                </Form.Item>
                <Form.Item
                  name="country"
                  label={
                    <span className="inline-block text-[13px] font-medium">
                      Country
                    </span>
                  }
                  className="!text-xs"
                >
                  <Select
                    labelInValue
                    className="w-full"
                    suffixIcon={<HiOutlineChevronDown />}
                    options={COUNTRIES}
                  />
                </Form.Item>
                <Form.Item
                  label={
                    <span className="inline-block font-medium text-[13px]">
                      Email
                    </span>
                  }
                  required={false}
                  name="email"
                  rules={[
                    {
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label={
                    <span className="inline-block font-medium text-[13px]">
                      Phone
                    </span>
                  }
                  required={false}
                  name="phone"
                >
                  <Input />
                </Form.Item>
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

export default ArtistRegisterPage;
