import { NavLink } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import "./style.scss";
import { getChildByType, getChildrenByType } from "react-nanny";
import ItemIcon from "./ItemIcon";
import SubItem from "./SubItem";

function SidebarItem({ title, path, end, children }) {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const subRef = useRef();

  const icon = useMemo(() => getChildByType(children, ItemIcon), []);
  const subItems = useMemo(() => getChildrenByType(children, SubItem), []);

  function handleClick(e) {
    if (subItems.length != 0) {
      e.preventDefault();
    }
    setExpanded(!expanded);
  }

  useEffect(() => {
    if (!subRef.current) return;
    if (expanded) {
      setHeight(subRef.current.offsetHeight);
    } else {
      setHeight(0);
    }
  }, [expanded]);

  return (
    <div className={clsx("sidebar-item", expanded && "expanded")}>
      <NavLink to={path} end={end} onClick={handleClick}>
        {({ isActive }) => (
          <div className={clsx("main", isActive && "active")}>
            <div className="flex items-center space-x-2.5">
              <div className="size-5 flex items-center">{icon}</div>
              <span className="text-[15px] font-normal">{title}</span>
            </div>
            {subItems.length > 0 && (
              <div>
                <HiChevronRight className="arrow" />
              </div>
            )}
          </div>
        )}
      </NavLink>

      {subItems.length > 0 && (
        <div className="sub-items" style={{ height: height }}>
          <ul ref={subRef}>
            {subItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SidebarItem;
