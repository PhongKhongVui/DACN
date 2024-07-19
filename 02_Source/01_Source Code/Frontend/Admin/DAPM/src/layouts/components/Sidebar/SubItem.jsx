import clsx from "clsx";
import { NavLink } from "react-router-dom";

function SubItem({ path, end, title }) {
  return (
    <NavLink to={path} end={end} className="item">
      {({ isActive }) => (
        <>
          <div
            className={clsx(
              "w-5 text-end mr-2.5",
              isActive && "font-semibold text-[--sidebar-item-active-color]"
            )}
          >
            -
          </div>
          <span
            className={clsx(
              "font-normal",
              isActive && "text-[--sidebar-item-active-color]"
            )}
          >
            {title}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default SubItem;
