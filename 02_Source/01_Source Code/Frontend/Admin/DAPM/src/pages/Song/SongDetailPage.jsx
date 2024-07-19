import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { RxDotFilled } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiHeadphone } from "react-icons/bi";
import { IoPlay } from "react-icons/io5";
import { Slider } from "antd";

function SongDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <PageHeader>Song Details</PageHeader>
      <div className="p-10">
        <div className="flex space-x-8">
          <div className="w-[360px] min-w-[360px] flex flex-col items-center">
            <img
              className="w-full aspect-square object-cover object-center rounded-md shadow-md select-none"
              src="https://i.scdn.co/image/ab67616d0000b27374fefed78db6d6cf4d963fdc"
              draggable={false}
            ></img>
            <h1 className="text-2xl text-slate-500 font-bold mt-4">Gasoline</h1>
            <div className="flex items-center text-slate-600 font-medium">
              <h6 className="text-xs">Hasley</h6>
              <RxDotFilled />
              <h6 className="text-xs">2020</h6>
            </div>
            <div className="flex items-center mt-1">
              <IoMdHeartEmpty className="text-slate-600 size-3" />
              <h6 className="ml-1 text-slate-600 text-xs">2500</h6>
              <BiHeadphone className="text-slate-600 ml-3 size-3" />
              <h6 className="text-slate-600 text-xs">15245</h6>
            </div>
            {/* <h4 className="text-cyan-500 text-xs font-semibold">
              Approval Pending
            </h4> */}
          </div>
          <div className="w-full pt-4">
            <div className="flex items-center w-ful">
              <div className="flex items-center min-w-fit">
                <button className="size-12 flex items-center justify-center rounded-full border-2 border-slate-500 text-slate-500">
                  <IoPlay className="size-8 ml-1" />
                </button>
              </div>
              <div className="ml-4 grow flex items-center">
                <h6 className="text-sm text-slate-600 mr-2">00:00</h6>
                <Slider
                  className="w-full"
                  defaultValue={0}
                  max={222}
                  min={0}
                  tooltip={{ open: false }}
                />
                <h6 className="text-sm text-slate-600 ml-2">03:42</h6>
              </div>
            </div>
            <h3 className="mt-5 font-medium text-lg">Song Information</h3>
            <div className="flex flex-col mt-3 space-y-2">
              <h6 className="text-[13px]">
                <span className="inline-block font-medium">Artist:</span>
                <span className="inline-block ml-2">Hasley</span>
              </h6>
              <h6 className="text-[13px]">
                <span className="inline-block font-medium">Album:</span>
                <span className="inline-block ml-2">Gasoline</span>
              </h6>
              <h6 className="text-[13px]">
                <span className="inline-block font-medium">Gengre:</span>
                <span className="inline-block ml-2">Pop, US-UK</span>
              </h6>
              <h6 className="text-[13px]">
                <span className="inline-block font-medium">Song type:</span>
              </h6>
              <h6 className="text-[13px]">
                <span className="inline-block font-medium">Song writer:</span>
              </h6>
              <h6 className="text-[13px]">
                <span className="inline-block font-medium">Lyric:</span>
              </h6>
              <h6 className="text-[13px]">
                <span className="inline-block font-medium">Distributor:</span>
              </h6>
              <h6 className="text-[13px]">
                <span className="inline-block font-medium">Created time:</span>
              </h6>
              <h6 className="text-[13px]">
                <span className="inline-block font-medium">Release time:</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongDetailPage;
