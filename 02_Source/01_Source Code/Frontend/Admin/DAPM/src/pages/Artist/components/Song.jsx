import { useState } from "react";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Pagination from "../../../components/Pagination";

function Song() {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState();

  function handleChange(a) {
    console.log(a);
  }

  function handlePageChange(page) {
    setCurrent(page);
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6 w-full">
        <Input placeholder="Search by name..." className="max-w-[360px]" />
        <div className="flex items-center">
          <span className="text-sm mr-3">Sort by played</span>
          <Select
            fontSize={12}
            defaultValue="DES"
            style={{ width: 70 }}
            options={[
              { label: "ASC", value: "ASC" },
              { label: "DES", value: "DES" },
            ]}
          />
        </div>
      </div>
      <table className="table-auto w-full border border-collapse">
        <thead>
          <tr
            role="heading"
            className="font-normal bg-gray-300 bg-opacity-50 border"
          >
            <th className="px-3 py-4 font-medium text-sm text-left">Song</th>
            <th className="px-3 py-4 font-medium text-sm text-left">Album</th>
            <th className="px-3 py-4 font-medium text-sm text-left">Status</th>
            <th className="px-3 py-4 font-medium text-sm text-left">Release</th>
            <th className="px-3 py-4 font-medium text-sm text-left">Played</th>
            <th className="px-3 py-4 font-medium text-sm text-left">Liked</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6].map((e, i) => (
            <tr
              key={i}
              className="border hover:bg-indigo-800 hover:bg-opacity-5 cursor-pointer"
              onClick={() => window.open("/music-catalog/song/dsf")}
            >
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
              <td className="p-2.5 text-sm">Pending</td>
              <td className="p-2.5 text-sm">Dynasty (Single)</td>
              <td className="p-2.5 text-sm">20/11/2020</td>
              <td className="p-2.5 text-sm">100.000</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center text-sm text-[--body-color]">
          <h6 className="text-sm text-[--body-color] mr-2.5">Per page: </h6>
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
        <Pagination total={10} current={current} onChange={handlePageChange} />
      </div>
    </div>
  );
}

export default Song;
