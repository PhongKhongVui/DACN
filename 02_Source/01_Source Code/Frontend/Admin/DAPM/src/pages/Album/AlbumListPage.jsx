import { Radio } from "antd";
import Select from "../../components/Select";
import Tooltip from "../../components/Tooltip";
import { IconButton, StatusButton } from "../../components/Button";
import { FiExternalLink } from "react-icons/fi";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import Input from "../../components/Input";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import RejectionForm from "../../components/RejectionForm";

const GENGRES = [
  { label: "Single", value: "SINGLE" },
  { label: "EP", value: "EP" },
  { label: "Album", value: "ALBUM" },
];

function AlbumListPage() {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState();
  const [hasPendingAlbum, setHasPendingAlbum] = useState(true);
  const [rejection, setRejection] = useState(false);
  const [rejectedId, setRejectedId] = useState(null);

  function handleReject(id) {
    setRejection(true);
    setRejectedId(id);
  }

  function handleCancleRejection() {
    setRejection(false);
  }

  function handleChange(a) {
    console.log(a);
  }

  function handlePageChange(page) {
    setCurrent(page);
  }

  return (
    <>
      <div>
        <div className="flex items-center px-6 h-10 font-semibold text-gray-800 bg-white shadow">
          Album List
        </div>
        <div className="flex space-x-6 p-6">
          <div className="w-[300px] min-w-[300px] bg-white rounded-md shadow-default p-6 h-fit">
            <div className="flex">
              <Input
                placeholder="Search by name, artist..."
                className="text-xs"
              />
            </div>
            <h3 className="mt-4 text-sm font-medium">Album status</h3>
            <div className="grid grid-cols-3 gap-x-2 mt-3">
              <div className="relative">
                <StatusButton active>Pending</StatusButton>
                {hasPendingAlbum && (
                  <div className="absolute -top-[6px] -right-[6px] px-1.5 bg-red-500 text-[9px] rounded-full text-white text-center">
                    4
                  </div>
                )}
              </div>
              <StatusButton>Published</StatusButton>
              <StatusButton>Rejected</StatusButton>
            </div>
            <h3 className="mt-4 mb-3 text-sm font-medium">Type</h3>
            <Select
              fontSize={12}
              height={32}
              mode="tags"
              placeholder="Select gengres"
              defaultValue={["SINGLE", "EP", "ALBUM"]}
              onChange={handleChange}
              style={{ width: "100%" }}
              options={GENGRES}
            />
            <h3 className="mt-4 mb-3 text-sm font-medium">Sort</h3>
            <Radio.Group
              name="radiogroup"
              defaultValue={1}
              className="mb-3 ml-2"
            >
              <div className="flex flex-col gap-2">
                <Radio value={1}>
                  <span className="text-xs">Played ascending</span>
                </Radio>
                <Radio value={2}>
                  <span className="text-xs">Played descending</span>
                </Radio>
                <Radio value={3}>
                  <span className="text-xs">Liked ascending</span>
                </Radio>
                <Radio value={4}>
                  <span className="text-xs">Liked descending</span>
                </Radio>
              </div>
            </Radio.Group>
          </div>
          <div className="w-full bg-white rounded-md shadow-default">
            <div className="p-6">
              <table className="table-auto w-full border border-collapse">
                <thead>
                  <tr
                    role="heading"
                    className="font-normal bg-gray-300 bg-opacity-50 border"
                  >
                    <th className="px-3 py-4 font-medium text-sm text-left">
                      Song
                    </th>
                    <th className="px-3 py-4 font-medium text-sm text-left">
                      Artist
                    </th>
                    <th className="px-3 py-4 font-medium text-sm text-left">
                      Album
                    </th>
                    <th className="px-3 py-4 font-medium text-sm text-left">
                      Published Date
                    </th>
                    <th className="px-3 py-4 font-medium text-sm text-left">
                      Played
                    </th>
                    <th className="px-3 py-4 font-medium text-sm text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border">
                    <td className="flex items-center p-2.5">
                      <img
                        className="size-12 block object-cover object-center rounded-sm"
                        src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/51/07/80/51078035-a781-3372-2004-b1a1055a1c0a/0859715986525_Cover.jpg/400x400bb.webp"
                      ></img>
                      <h6 className="text-[--body-color] font-medium ml-2.5 text-sm">
                        Dynasty
                      </h6>
                    </td>
                    <td className="p-2.5 text-sm">Miia</td>
                    <td className="p-2.5 text-sm">Dynasty (Single)</td>
                    <td className="p-2.5 text-sm">20/11/2020</td>
                    <td className="p-2.5 text-sm">100.000</td>
                    <td className="p-2.5">
                      <div className="flex">
                        <Tooltip content="Approve">
                          <IconButton className="text-emerald-500">
                            <IoMdCheckmark className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Reject">
                          <IconButton
                            className="text-red-500"
                            onClick={() => handleReject(1)}
                          >
                            <MdOutlineClose className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Detail">
                          <IconButton>
                            <FiExternalLink className="size-4" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                  <tr className="border">
                    <td className="flex items-center p-2.5">
                      <img
                        className="size-12 block object-cover object-center rounded-sm"
                        src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/51/07/80/51078035-a781-3372-2004-b1a1055a1c0a/0859715986525_Cover.jpg/400x400bb.webp"
                      ></img>
                      <h6 className="text-[--body-color] font-medium ml-2.5 text-sm">
                        Dynasty
                      </h6>
                    </td>
                    <td className="p-2.5 text-sm">Miia</td>
                    <td className="p-2.5 text-sm">Dynasty (Single)</td>
                    <td className="p-2.5 text-sm">20/11/2020</td>
                    <td className="p-2.5 text-sm">100.000</td>
                    <td className="p-2.5">
                      <div className="flex">
                        <Tooltip content="Approve">
                          <IconButton className="text-emerald-500">
                            <IoMdCheckmark className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Reject">
                          <IconButton className="text-red-500">
                            <MdOutlineClose className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Detail">
                          <IconButton>
                            <FiExternalLink className="size-4" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                  <tr className="border">
                    <td className="flex items-center p-2.5">
                      <img
                        className="size-12 block object-cover object-center rounded-sm"
                        src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/51/07/80/51078035-a781-3372-2004-b1a1055a1c0a/0859715986525_Cover.jpg/400x400bb.webp"
                      ></img>
                      <h6 className="text-[--body-color] font-medium ml-2.5 text-sm">
                        Dynasty
                      </h6>
                    </td>
                    <td className="p-2.5 text-sm">Miia</td>
                    <td className="p-2.5 text-sm">Dynasty (Single)</td>
                    <td className="p-2.5 text-sm">20/11/2020</td>
                    <td className="p-2.5 text-sm">100.000</td>
                    <td className="p-2.5">
                      <div className="flex">
                        <Tooltip content="Approve">
                          <IconButton className="text-emerald-500">
                            <IoMdCheckmark className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Reject">
                          <IconButton className="text-red-500">
                            <MdOutlineClose className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Detail">
                          <IconButton>
                            <FiExternalLink className="size-4" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                  <tr className="border">
                    <td className="flex items-center p-2.5">
                      <img
                        className="size-12 block object-cover object-center rounded-sm"
                        src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/51/07/80/51078035-a781-3372-2004-b1a1055a1c0a/0859715986525_Cover.jpg/400x400bb.webp"
                      ></img>
                      <h6 className="text-[--body-color] font-medium ml-2.5 text-sm">
                        Dynasty
                      </h6>
                    </td>
                    <td className="p-2.5 text-sm">Miia</td>
                    <td className="p-2.5 text-sm">Dynasty (Single)</td>
                    <td className="p-2.5 text-sm">20/11/2020</td>
                    <td className="p-2.5 text-sm">100.000</td>
                    <td className="p-2.5">
                      <div className="flex">
                        <Tooltip content="Approve">
                          <IconButton className="text-emerald-500">
                            <IoMdCheckmark className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Reject">
                          <IconButton className="text-red-500">
                            <MdOutlineClose className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Detail">
                          <IconButton>
                            <FiExternalLink className="size-4" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                  <tr className="border">
                    <td className="flex items-center p-2.5">
                      <img
                        className="size-12 block object-cover object-center rounded-sm"
                        src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/51/07/80/51078035-a781-3372-2004-b1a1055a1c0a/0859715986525_Cover.jpg/400x400bb.webp"
                      ></img>
                      <h6 className="text-[--body-color] font-medium ml-2.5 text-sm">
                        Dynasty
                      </h6>
                    </td>
                    <td className="p-2.5 text-sm">Miia</td>
                    <td className="p-2.5 text-sm">Dynasty (Single)</td>
                    <td className="p-2.5 text-sm">20/11/2020</td>
                    <td className="p-2.5 text-sm">100.000</td>
                    <td className="p-2.5">
                      <div className="flex">
                        <Tooltip content="Approve">
                          <IconButton className="text-emerald-500">
                            <IoMdCheckmark className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Reject">
                          <IconButton className="text-red-500">
                            <MdOutlineClose className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Detail">
                          <IconButton>
                            <FiExternalLink className="size-4" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                  <tr className="border">
                    <td className="flex items-center p-2.5">
                      <img
                        className="size-12 block object-cover object-center rounded-sm"
                        src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/51/07/80/51078035-a781-3372-2004-b1a1055a1c0a/0859715986525_Cover.jpg/400x400bb.webp"
                      ></img>
                      <h6 className="text-[--body-color] font-medium ml-2.5 text-sm">
                        Dynasty
                      </h6>
                    </td>
                    <td className="p-2.5 text-sm">Miia</td>
                    <td className="p-2.5 text-sm">Dynasty (Single)</td>
                    <td className="p-2.5 text-sm">20/11/2020</td>
                    <td className="p-2.5 text-sm">100.000</td>
                    <td className="p-2.5">
                      <div className="flex">
                        <Tooltip content="Approve">
                          <IconButton className="text-emerald-500">
                            <IoMdCheckmark className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Reject">
                          <IconButton className="text-red-500">
                            <MdOutlineClose className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Detail">
                          <IconButton>
                            <FiExternalLink className="size-4" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                  <tr className="border">
                    <td className="flex items-center p-2.5">
                      <img
                        className="size-12 block object-cover object-center rounded-sm"
                        src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/51/07/80/51078035-a781-3372-2004-b1a1055a1c0a/0859715986525_Cover.jpg/400x400bb.webp"
                      ></img>
                      <h6 className="text-[--body-color] font-medium ml-2.5 text-sm">
                        Dynasty
                      </h6>
                    </td>
                    <td className="p-2.5 text-sm">Miia</td>
                    <td className="p-2.5 text-sm">Dynasty (Single)</td>
                    <td className="p-2.5 text-sm">20/11/2020</td>
                    <td className="p-2.5 text-sm">100.000</td>
                    <td className="p-2.5">
                      <div className="flex">
                        <Tooltip content="Approve">
                          <IconButton className="text-emerald-500">
                            <IoMdCheckmark className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Reject">
                          <IconButton className="text-red-500">
                            <MdOutlineClose className="size-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Detail">
                          <IconButton>
                            <FiExternalLink className="size-4" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center text-sm text-[--body-color]">
                  <h6 className="text-sm text-[--body-color] mr-2.5">
                    Per page:{" "}
                  </h6>
                  <Select
                    height={32}
                    defaultValue={5}
                    style={{ width: 60 }}
                    onChange={handleChange}
                    options={[
                      { value: 5, label: "5" },
                      { value: 10, label: "10" },
                      { value: 15, label: "25" },
                      { value: 20, label: "20" },
                      { value: 30, label: "30" },
                      { value: "-1", label: "All" },
                    ]}
                  />
                  <div className="ml-5">
                    <span>Page</span>
                    <span className="mx-1 font-medium">{current}</span>
                    <span>of</span>
                    <span className="mx-1 font-medium">10</span>
                  </div>
                </div>
                <Pagination
                  total={10}
                  current={current}
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RejectionForm
        title={"Album Rejection"}
        open={rejection}
        handleCancel={handleCancleRejection}
      />
    </>
  );
}

export default AlbumListPage;
