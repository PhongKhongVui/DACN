import Scrollbars from "rc-scrollbars";
import { RiDashboard2Line, RiFileChartLine } from "react-icons/ri";
import SidebarItem from "./SidebarItem";
import SubItem from "./SubItem";
import ItemIcon from "./ItemIcon";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { GrSettingsOption } from "react-icons/gr";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="w-full h-full bg-[--sidebar-bg] relative">
      <img
        className="block w-full h-full absolute top-0 object-cover left-0 opacity-[0.08] z-[0]"
        src="/sidebar-background.jpg"
        draggable={false}
      />
      <div className="w-full h-full flex flex-col">
        <div className="h-[70px] min-h-[70px] flex items-center justify-center">
          <Link to="/">
            <img src="/logo-dark.svg" className="w-[110px]" />
          </Link>
        </div>
        <Scrollbars
          style={{ flexGrow: 1, marginBottom: 16 }}
          autoHide
          autoHideTimeout={500}
          autoHideDuration={200}
          renderThumbVertical={(props) => (
            <div
              {...props}
              className="thumb-vertical !bg-[--sidebar-thumb-color]"
            />
          )}
        >
          <h3 className="text-[11px] tracking-wide font-semibold py-3 px-5 text-[--sidebar-item-color]">
            MENU
          </h3>
          <SidebarItem title="Dashboard" path="/">
            <ItemIcon>
              <RiDashboard2Line className="size-5" />
            </ItemIcon>
            <SubItem title="Analytic" path="/" end></SubItem>
            <SubItem title="Music Catalog" path="/sa" end></SubItem>
          </SidebarItem>
          <SidebarItem title="Distributors" path="/distributor">
            <ItemIcon>
              <TbBuildingSkyscraper className="size-5" />
            </ItemIcon>
            <SubItem title="Profile" path="/distributor" end></SubItem>
            <SubItem
              title="Music Publishing"
              path="/distributor/publishing"
            ></SubItem>
            <SubItem title="Register" path="/distributor/register" />
          </SidebarItem>
          <SidebarItem title="Artists" path="/artist">
            <ItemIcon>
              <TbBuildingSkyscraper className="size-5" />
            </ItemIcon>
            <SubItem title="Artist List" path="/artist" end></SubItem>
            <SubItem title="Register" path="/artist/register" />
          </SidebarItem>
          <SidebarItem title="Music Catalogs" path="/music-catalog">
            <ItemIcon>
              <MdOutlineLibraryMusic className="size-5" />
            </ItemIcon>
            <SubItem title="Song" path="/music-catalog/song" end></SubItem>
            <SubItem title="Album" path="/music-catalog/album" end></SubItem>
            <SubItem
              title="Playlist"
              path="/music-catalog/playlist"
              end
            ></SubItem>
            {/* <SubItem title="" path="/sa" end></SubItem> */}
          </SidebarItem>
          <SidebarItem title="App Content" path="/app-content">
            <ItemIcon>
              <LuLayoutPanelLeft className="size-5" />
            </ItemIcon>
            <SubItem title="Discovery" path="/" end></SubItem>
            <SubItem title="Hub" path="/sa" end></SubItem>
            <SubItem title="Charts" path="/sa" end></SubItem>
          </SidebarItem>
          <SidebarItem title="App Setting" path="/app-content">
            <ItemIcon>
              <GrSettingsOption className="size-4" />
            </ItemIcon>
            <SubItem title="Subscription Packages" path="/" end></SubItem>
            <SubItem title="FAQs" path="/sa" end></SubItem>
          </SidebarItem>
          <SidebarItem title="User Management" path="/user">
            <ItemIcon>
              <HiOutlineUserGroup className="size-5" />
            </ItemIcon>
          </SidebarItem>
          <SidebarItem title="Support" path="/contact">
            <ItemIcon>
              <AiOutlineQuestionCircle className="size-5" />
            </ItemIcon>
            <SubItem title="Copyright" path="/" end></SubItem>
            <SubItem title="Contact" path="/sa" end></SubItem>
          </SidebarItem>
        </Scrollbars>
      </div>
    </div>
  );
}

export default Sidebar;
