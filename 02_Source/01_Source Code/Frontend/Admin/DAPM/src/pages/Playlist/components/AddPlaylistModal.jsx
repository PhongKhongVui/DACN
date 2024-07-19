import { Modal } from "antd";
import Input from "../../../components/Input";

function AddPlaylistForm({ open, handleCancel, onSuccess }) {
  return (
    <Modal
      title={<h3 className="font-medium">Create New Playlist</h3>}
      open={open}
      onCancel={handleCancel}
      footer={null}
      destroyOnClose
      width={400}
    >
      <form>
        <h6 className="text-[13px] font-light my-5 text-justify">
          Enter playlist name to create a playlist
        </h6>
        <Input />
        <div className="flex justify-end mt-5">
          <button
            type="button"
            className="px-3 py-1.5 text-[13px] text-gray-500 rounded hover:bg-gray-200"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-1.5 text-[13px] font-medium text-white rounded bg-[--primary] hover:brightness-110 ml-2"
          >
            Send
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddPlaylistForm;
