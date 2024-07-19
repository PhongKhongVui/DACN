import clsx from "clsx";
import { NavLink } from "react-router-dom";

function Tab({ to, end = true, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "px-5 py-4 text-sm font-medium relative z-0",
          isActive && "bg-gray-100 bg-opacity-20",
          isActive &&
            "after:content-[''] after:w-full after:h-[1px] after:bg-[--primary] after:bottom-0 after:left-0 after:absolute after:z-[1]"
        )
      }
      end={end}
    >
      {children}
    </NavLink>
  );
}

export default Tab;
