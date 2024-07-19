import Select from "../../components/Select";
import Tooltip from "../../components/Tooltip";
import { IconButton } from "../../components/Button";
import { FiExternalLink } from "react-icons/fi";
import Pagination from "../../components/Pagination";
import { useEffect, useRef, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { request } from "../../services/axios";
import Filter from "./components/Filter";

function ArtistlistListPage() {
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);
  const [pending, setPending] = useState(0);
  const [data, setData] = useState([]);
  const lockRef = useRef(false);

  useEffect(() => {
    if (lockRef.current) return;
    lockRef.current = true;

    request
      .get("/artists/search?name=&status=APPROVAL_PENDING")
      .then((res) => {
        setData(res.data.content);
        // setCurrent(0);
        // setTotal(res.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleReject(id) {
    setRejection(true);
    setRejectedId(id);
  }

  function handleChange(a) {
    console.log(a);
  }

  function handlePageChange(page) {
    setCurrent(page);
  }

  function handleFilterChange(filters) {}

  return (
    <div>
      <div className="flex justify-between items-center px-6 h-10 font-semibold text-gray-800 bg-white shadow">
        <span>Artist List</span>
      </div>

      <div className="flex space-x-6 p-6">
        <Filter handleChange={handleFilterChange} />
        <div className="w-full bg-white rounded-md shadow-default">
          <div className="p-6">
            <table className="table-auto w-full border border-collapse">
              <thead>
                <tr
                  role="heading"
                  className="font-normal bg-gray-300 bg-opacity-50 border"
                >
                  <th className="px-3 py-4 font-medium text-sm text-left">
                    Artist
                  </th>
                  <th className="px-3 py-4 font-medium text-sm text-left">
                    Alias
                  </th>
                  <th className="px-3 py-4 font-medium text-sm text-left">
                    Profile ID
                  </th>
                  <th className="px-3 py-4 font-medium text-sm text-left">
                    Nationality
                  </th>
                  <th className="px-3 py-4 font-medium text-sm text-left">
                    Total Song
                  </th>
                  <th className="px-3 py-4 font-medium text-sm text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6].map((e, i) => (
                  <tr key={i} className="border">
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
                ))}
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
  );
}

export default ArtistlistListPage;
