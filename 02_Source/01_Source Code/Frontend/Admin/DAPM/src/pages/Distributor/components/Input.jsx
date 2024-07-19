import clsx from "clsx";
import React from "react";

const Input = React.forwardRef(function ({ className, error, ...rest }, ref) {
  return (
    <input
      className={clsx(
        "outline-none border focus:border-[--primary] rounded-md",
        error ? "border-red-400 text-red-400" : "border-gray-300",
        className
      )}
      ref={ref}
      {...rest}
    ></input>
  );
});

export default Input;
