import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function DefaultLayout() {
  const mainRef = useRef();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current.scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    mainRef.current.addEventListener("scroll", handleScroll);
    return () => mainRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex h-screen max-h-screen">
      <div className="grow-0 w-[250px] min-w-[250px] h-screen">
        <Sidebar />
      </div>
      <div className="grow overflow-y-auto bg-[--layout-bg]" ref={mainRef}>
        <div className="h-[70px] sticky top-0 z-10">
          <Header scrolled={scrolled} />
        </div>
        <div className="min-h-[calc(100vh-140px)] z-0">
          <Outlet></Outlet>
        </div>
        <div className="h-[70px] footer bg-white shadow"></div>
      </div>
    </div>
  );
}

export default DefaultLayout;
