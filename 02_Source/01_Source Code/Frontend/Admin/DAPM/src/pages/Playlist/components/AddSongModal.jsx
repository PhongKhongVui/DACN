import Scrollbars from "rc-scrollbars";
import Input from "../../../components/Input";
import { Modal } from "antd";

function AddSongModal({ open, handleClose, onSuccess }) {
  return (
    <Modal
      title={<h3 className="text-lg font-medium">Add song to playlist</h3>}
      open={open}
      onCancel={handleClose}
      footer={null}
      destroyOnClose
      width={400}
    >
      <div>
        <Input
          className="h-10 px-2.5 w-full text-slate-[800] text-[15px] placeholder:font-light mt-2"
          placeholder="Enter song title, id..."
        />
        <Scrollbars
          style={{
            height: "300px",
            marginTop: "20px",
            marginBottom: 16,
          }}
          autoHide
          autoHideTimeout={500}
          autoHideDuration={200}
          renderThumbVertical={(props) => (
            <div {...props} className="thumb-vertical !bg-gray-200" />
          )}
        >
          {/* no keyword or no result */}
          {/* <div className="h-full flex items-center justify-center">
                  <i className="text-gray-400 inline-block mb-10 text-[15px]">
                  No artist found
                  </i>
                </div> */}
          <ul className="flex flex-col space-y-1">
            <li className="flex items-center px-4 py-2 text-slate-800 shadow-default rounded bg-gray-100 cursor-pointer hover:bg-indigo-100">
              <img
                className="size-[40px] rounded-md object-cover object-center block mr-2.5"
                src="https://upload.wikimedia.org/wikipedia/vi/f/f1/Adele_21.jpg"
              ></img>
              <div className="flex flex-col">
                <h3 className="text-[15px]">Hien Thai</h3>
                <h3 className="text-[15px] text-sm">210354wnakfd</h3>
              </div>
            </li>
          </ul>
        </Scrollbars>
      </div>
    </Modal>
  );
}

export default AddSongModal;
