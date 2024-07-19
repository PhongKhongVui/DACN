import clsx from "clsx";
import React from "react";

const Button = React.forwardRef(function (
  { className, children, loading, disabled, ...rest },
  ref
) {
  return (
    <button
      className={clsx(
        "flex items-center px-3 rounded-md leading-[100%]",
        !disabled && "hover:brightness-125",
        disabled && "opacity-60 cursor-default",
        className
      )}
      ref={ref}
      {...rest}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

export default Button;
