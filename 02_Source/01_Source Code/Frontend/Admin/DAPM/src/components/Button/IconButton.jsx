import clsx from "clsx";
import React from "react";

const IconButton = React.forwardRef(function (
  {
    size = "size-[32px]",
    color = "text-[--text-secondary]",
    className,
    children,
    ...rest
  },
  ref
) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center hover:bg-[--btn-hover-bg] rounded-full",
        size,
        color,
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

export default IconButton;
