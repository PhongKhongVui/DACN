import clsx from "clsx";
import { NavLink } from "react-router-dom";

function Tab({ to, end = true, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "px-3 py-2 font-medium text-sm text-white text-opacity-50 rounded-md",
          isActive && "bg-gray-100 bg-opacity-20"
        )
      }
      end={end}
    >
      {children}
    </NavLink>
  );
}

export default Tab;
