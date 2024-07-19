import Input, { DateInput, InputFile, TimeInput } from "../../components/Input";
import { MdInfoOutline } from "react-icons/md";
import Tooltip from "../../components/Tooltip";
import { Modal } from "antd";
import { useState } from "react";
import {
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineMusicNote,
} from "react-icons/hi";
import { IoAddOutline, IoCloseOutline, IoImageOutline } from "react-icons/io5";
import { AiOutlineFileText } from "react-icons/ai";
import IconButton from "../../components/Button/IconButton";
import Scrollbars from "rc-scrollbars";
import Select from "../../components/Select";
import { PiListMagnifyingGlassThin } from "react-icons/pi";
import Tab from "./components/Tab";
import Step from "./components/Step";
import clsx from "clsx";
import Button from "../../components/Button/Button";
import AlbumSearch from "./components/AlbumSearch";

const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
const TYPE_OPTIONS = [
  {
    value: "original",
    label: "Original",
  },
  {
    value: "cover",
    label: "Cover",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "public",
    label: "Public",
  },
];

const ALBUM_TYPES = [
  {
    value: "single",
    label: "Single",
  },
  {
    value: "ep",
    label: "EP",
  },
  {
    value: "album",
    label: "Album",
  },
];

function SongAddingForm() {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  const [findAlbum, setFindAlbum] = useState(false);
  const [findArtist, setFindArtist] = useState(false);

  function hideAlbumModal() {
    setFindAlbum(false);
  }

  function hideArtistModal() {
    setFindArtist(false);
  }

  return (
    <div>
      <div className="flex items-center h-10 px-6 bg-white shadow-default">
        <h3 className="font-semibold text-gray-700">Music Publishing</h3>
      </div>
      <div className="p-6">
        <form>
          <div className="w-[800px] rounded-md bg-white shadow-default mx-auto px-[40px] py-10 ">
            <h2 className="mb-2 font-medium text-[15px]">Song Information</h2>
            <div className="grid grid-cols-4 gap-x-7 gap-y-5">
              <div className="col-span-2">
                <label>
                  <span className="inline-block mb-2 text-[13px] font-medium">
                    Title *
                  </span>
                  <Input />
                </label>
              </div>
              <div className="col-span-2">
                <label>
                  <span className=" inline-block mb-2 text-[13px] font-medium">
                    Gengre *
                  </span>
                  <Select
                    suffixIcon={<HiOutlineChevronDown />}
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
                </label>
              </div>
              <div className="col-span-2">
                <div className=" flex items-center justify-between mb-2 text-[13px] font-medium">
                  <span>Is the song Original/Remix/Cover?</span>
                  <Tooltip content="Detail">
                    <button type="button" className="text-slate-400">
                      <MdInfoOutline />
                    </button>
                  </Tooltip>
                </div>

                <Select
                  labelInValue
                  className="w-full"
                  suffixIcon={<HiOutlineChevronDown />}
                  defaultValue={TYPE_OPTIONS[0]}
                  options={TYPE_OPTIONS}
                />
              </div>
              <div className="col-span-2">
                <label>
                  <span className="inline-block mb-2 text-[13px] font-medium">
                    Songwriter *
                  </span>
                  <Input className="h-[38px] align-middle px-2.5 w-full font text-slate-[800] leading-normal text-[15px]" />
                </label>
              </div>
              <div className="col-span-2">
                <span className="inline-block mb-2 text-[13px] font-medium">
                  Thumnail (Artwork) *
                </span>
                <InputFile icon={<IoImageOutline />} />
              </div>
              <div className="col-span-2">
                <span className="inline-block mb-2 text-[13px] font-medium">
                  Audio file *
                </span>
                <InputFile icon={<HiOutlineMusicNote />} />
              </div>
              <div className="col-span-2 row-span-2 col-start-1 h-[156px]">
                <div className="h-full w-full rounded-md border border-dashed border-gray-400 p-2">
                  <img
                    className="h-full aspect-square block mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/vi/f/f1/Adele_21.jpg"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <span className="inline-block mb-2 text-[13px] font-medium">
                  Lyrics file
                </span>
                <InputFile icon={<AiOutlineFileText />} />
              </div>
              <div>
                <span className="inline-block mb-2 text-[13px] font-medium">
                  Release time
                </span>
                <TimeInput />
              </div>
              <div>
                <span className="inline-block mb-2 text-[13px] font-medium">
                  Release date
                </span>
                <DateInput />
              </div>
            </div>
            {/* Artist */}
            <div>
              <div className="col-span-2 mt-10 mb-1 flex items-center justify-between">
                <h2 className="pb-1 font-medium text-[15px]">Artist</h2>
                <Tooltip content="Find artist">
                  <IconButton onClick={() => setFindAlbum(true)} type="button">
                    <PiListMagnifyingGlassThin className="size-5" />
                  </IconButton>
                </Tooltip>
                <Modal
                  title={<h3 className="text-lg font-medium">Find artist</h3>}
                  open={findArtist}
                  onCancel={hideArtistModal}
                  footer={null}
                  destroyOnClose
                  width={400}
                >
                  <AlbumSearch />
                </Modal>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col items-center py-5">
                <h6 className="text-[13px] italic font-light leading-[60px] align-middle bg-gray-100 w-full text-center rounded-md select-none">
                  Select at least one artist
                </h6>
              </div>
            </div>
            {/* Album */}
            <div>
              <div className="col-span-2 mt-5 mb-1 flex items-center justify-between">
                <h2 className="pb-1 font-medium text-[15px]">Album</h2>
                <Tooltip content="Find album">
                  <IconButton onClick={() => setFindAlbum(true)} type="button">
                    <PiListMagnifyingGlassThin className="size-5" />
                  </IconButton>
                </Tooltip>
                <Modal
                  title={<h3 className="text-lg font-medium">Find album</h3>}
                  open={findAlbum}
                  onCancel={hideAlbumModal}
                  footer={null}
                  destroyOnClose
                  width={400}
                >
                  <AlbumSearch />
                </Modal>
              </div>
              {/* <div className="flex items-center bg-gray-100 shadow-default p-3 rounded-md pr-12 group relative">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <img
                      className="size-[60px] rounded-md object-cover object-center block mr-3"
                      src="https://upload.wikimedia.org/wikipedia/vi/f/f1/Adele_21.jpg"
                    ></img>
                    <div className="flex flex-col">
                      <h3 className="leading-[100%] font-medium">
                        This is the album
                      </h3>
                      <h6 className="leading-[100%] mt-2 text-[13px]">Adele</h6>
                    </div>
                  </div>
                  <h6 className="text-[13px]">EP</h6>
                  <h6 className="text-[13px]">12 songs</h6>
                </div>
                <Tooltip content="Remove">
                  <button
                    className="hidden group-[:hover]:block absolute right-0 mr-2.5 text-gray-600 hover:text-gray-800"
                    type="button"
                  >
                    <IoCloseOutline className="size-6" />
                  </button>
                </Tooltip>
              </div> */}
              <div className="grid grid-cols-2 gap-x-7 gap-y-5">
                <div>
                  <span className="inline-block mb-2 text-[13px] font-medium">
                    Thumnail (Artwork)
                  </span>
                  <InputFile icon={<IoImageOutline />} />
                </div>
                <div>
                  <label>
                    <span className="inline-block mb-2 text-[13px] font-medium">
                      Title
                    </span>
                    <Input />
                  </label>
                </div>
                <div className="row-span-2 h-[156px]">
                  <div className="h-full w-full rounded-md border border-dashed border-gray-400 p-2">
                    <img
                      className="h-full aspect-square block mx-auto"
                      src="https://upload.wikimedia.org/wikipedia/vi/f/f1/Adele_21.jpg"
                    />
                  </div>
                </div>
                <div>
                  <div className=" flex items-center justify-between mb-2 text-[13px] font-medium">
                    <span>Album type</span>
                    <Tooltip content="Detail">
                      <button type="button" className="text-slate-400">
                        <MdInfoOutline />
                      </button>
                    </Tooltip>
                  </div>
                  <Select
                    labelInValue
                    className="w-full"
                    suffixIcon={<HiOutlineChevronDown />}
                    defaultValue={TYPE_OPTIONS[0]}
                    options={ALBUM_TYPES}
                  />
                </div>
                <div className="flex space-x-7">
                  <div>
                    <span className="inline-block mb-2 text-[13px] font-medium">
                      Release time
                    </span>
                    <TimeInput />
                  </div>
                  <div>
                    <span className="inline-block mb-2 text-[13px] font-medium">
                      Release date
                    </span>
                    <DateInput />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h6 className="text-xs font-light italic">
                - * is marked as a must field
              </h6>
              <h6 className="text-xs font-light italic">
                - Album is optional, you have to fill all the fields or keep it
                all blank
              </h6>
            </div>
            <div className="flex flex-row-reverse mt-6">
              <Button className="bg-[--primary] h-[32px] text-white disabled:bg-gray-300 px-5 font-medium">
                <span className="text-[13px]">Submit</span>
              </Button>
            </div>
          </div>

          {/* footer */}
        </form>
      </div>
    </div>
  );
}

export default SongAddingForm;
