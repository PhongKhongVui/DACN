import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { RxDotFilled } from "react-icons/rx";
import { IoIosAddCircleOutline, IoMdHeartEmpty } from "react-icons/io";
import { BiHeadphone } from "react-icons/bi";
import Tooltip from "../../components/Tooltip";
import { IconButton } from "../../components/Button";
import { IoAdd } from "react-icons/io5";
import Song from "./components/Song";
import { Modal } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";
import AddSongModal from "./components/AddSongModal";
import { BsDisc } from "react-icons/bs";

function PlaylistDetailPage() {
  const { id } = useParams();
  const [addSong, setAddSong] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(-1);

  function handleDeleteClick(index) {
    setDeleteIndex(index);
    setDeleteWarning(true);
  }

  function handleDelete() {
    // To do: remove the song with index = deleteIndex
    // Remove song from
    setTimeout(() => {
      setDeleteWarning(false);
      toast.success("Song removed");
    }, 1000);
  }

  function handleAddSong(song) {}

  return (
    <>
      <div>
        <PageHeader>Playlist Details</PageHeader>
        <div className="p-10">
          <div className="flex space-x-8">
            <div className="w-[360px] min-w-[360px] flex flex-col items-center">
              <img
                className="w-full aspect-square object-cover object-center rounded-md shadow-md select-none"
                src="https://i.scdn.co/image/ab67616d0000b27374fefed78db6d6cf4d963fdc"
                draggable={false}
              ></img>
              <h1 className="text-2xl text-slate-500 font-bold mt-4">
                Gasoline
              </h1>
              <div className="flex items-center text-slate-600 font-medium">
                <h6 className="text-xs">127 songs</h6>
                <RxDotFilled />
                <h6 className="text-xs">13 hours 50 mins</h6>
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
            <div className="w-full">
              {/* <div className="flex justify-between border-b border-gray-200 pb-3">
                <div className="flex items-center">
                  <h3 className="font-medium text-slate-800 text-sm">Song</h3>
                  <Tooltip content="Add song">
                    <IconButton
                      className="ml-1"
                      onClick={() => setAddSong(true)}
                    >
                      <IoIosAddCircleOutline size={18} />
                    </IconButton>
                  </Tooltip>
                </div>
                <h3 className="font-medium text-slate-800 text-sm">Duration</h3>
              </div>
              <ul className="">
                {[1, 2, 3, 4, 5].map((e, i) => (
                  <Song key={i} index={i} onRemove={handleDeleteClick} />
                ))}
              </ul> */}
              <div className="w-full h-[360px] rounded bg-indigo-300 bg-opacity-10 flex flex-col justify-center items-center">
                <BsDisc size={60} className="fill-gray-300" />
                <h6 className="text-sm italic text-gray-400 font-medium mt-2">
                  This playlist is empty
                </h6>
                <button
                  className="px-3 py-1.5 text-white text-sm font-medium bg-[--primary] hover:brightness-110 rounded mt-2"
                  onClick={() => setAddSong(true)}
                >
                  Add Song
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Removing Warning"
        open={deleteWarning}
        onOk={handleDelete}
        onCancel={() => setDeleteWarning(false)}
        okText="Yes"
        cancelText="Cancel"
        width={350}
      >
        <p className="text-sm font-light my-5">
          Are you sure want to remove the song from playlist
        </p>
      </Modal>
      <AddSongModal
        open={addSong}
        handleClose={() => setAddSong(false)}
        onSuccess={handleAddSong}
      />
    </>
  );
}

export default PlaylistDetailPage;
