import { useEffect, useRef, useState } from "react";

function InputFile({ icon, title = "Upload", onChange, ...rest }) {
  const [fileName, setFileName] = useState();
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    console.log(ref.current.offsetWidth);
  }, []);

  function handleChange(e) {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);

      try {
        onChange(e);
      } catch (error) {}
    }
  }

  console.log(ref.current?.offsetWidth);

  return (
    <div className="flex">
      <div
        className="h-[38px] flex items-center px-2.5 rounded-l border-y border-l border-gray-300"
        title={fileName}
        style={{ width: `calc(100% - ${width}px)` }}
      >
        <span className="truncate text-sm italic w-full">{fileName}</span>
      </div>
      <label className="block" ref={ref}>
        <input
          id="audio"
          type="file"
          className="hidden"
          onChange={handleChange}
          {...rest}
        ></input>
        <div
          type="button"
          className="rounded-r bg-[--primary] h-[38px] flex items-center space-x-2.5 text-white text-sm px-3 cursor-pointer hover:brightness-95"
        >
          {icon}
          <span className="text-sm">{title}</span>
        </div>
      </label>
    </div>
  );
}

export default InputFile;
