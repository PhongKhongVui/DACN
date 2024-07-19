import clsx from "clsx";

function Step({ title, no, active = false, onClick }) {
  function handleClick() {
    try {
      onClick();
    } catch (error) {}
  }

  return (
    <div
      className={clsx(
        "flex flex-col items-center cursor-pointer",
        !active && "text-gray-300"
      )}
      onClick={handleClick}
    >
      <div
        className={clsx(
          "size-8 flex items-center justify-center font-medium rounded-full border-2 text-sm",
          active && "border-gray-600"
        )}
      >
        {no}
      </div>
      <h2 className="font-medium px-2 mt-1">{title}</h2>
    </div>
  );
}

export default Step;
