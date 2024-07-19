import { Link } from "react-router-dom";

function Song({ index, song }) {
  return (
    <Link to="#">
      <div className="flex items-center rounded-md p-2.5 hover:bg-gray-200 border-b border-gray-200">
        <div className="text-sm px-2 mr-3">{index}</div>
        <img
          className="size-10 min-size-10 rounded-sm shadow-sm block mr-2"
          src="https://upload.wikimedia.org/wikipedia/vi/e/e5/Hozier_Take_Me_to_Church.jpg"
        ></img>
        <div className="flex flex-col grow">
          <h3 className="text-sm text-slate-700 font-medium">
            Take me to church
          </h3>
          <h3 className="text-xs">Hoizer</h3>
        </div>
        <span className="text-[13px] text-slate-700 font-medium">05:12</span>
      </div>
    </Link>
  );
}

export default Song;
