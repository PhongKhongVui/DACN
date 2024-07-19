import clsx from "clsx";

function StatusButton({ active, children, ...rest }) {
  return (
    <button
      className={clsx(
        "w-full flex items-center justify-center h-8 rounded font-medium text-xs hover:brightness-90",
        active
          ? "text-white bg-[--primary] shadow"
          : "text-gray-500 hover:bg-gray-50 hover:bg-opacity-50"
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default StatusButton;
