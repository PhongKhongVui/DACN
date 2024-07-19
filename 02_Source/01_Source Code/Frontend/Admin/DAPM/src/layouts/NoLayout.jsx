import { Outlet } from "react-router-dom";

function NoLayout() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}

export default NoLayout;
