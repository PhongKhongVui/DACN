import clsx from "clsx";
import { TbMenu2 } from "react-icons/tb";
import { IconButton } from "../../../components/Button";
import { BiBell } from "react-icons/bi";
import UserMenu from "./UserMenu";
import Tooltip from "../../../components/Tooltip";

function Header({ scrolled }) {
  return (
    <div
      className={clsx(
        "h-full w-full px-6 flex justify-between bg-[--primary-bg] box-border border-b border-[--border-primary]",
        scrolled && "shadow-[0_1px_2px_rgba(56,65,74,.15)]"
      )}
    >
      <div className="grow flex">
        <div className="flex items-center">
          <IconButton className="!size-11 -ml-2.5">
            <TbMenu2 className="size-6" />
          </IconButton>
        </div>
      </div>
      <div className="grow-0 flex">
        <div className="flex h-full items-center">
          <Tooltip content="Notification">
            <IconButton className="!size-10">
              <div className="block relative">
                <BiBell className="size-6" />
                <div className="rounded-full px-1.5 bg-red-500 absolute z-[1] bottom-[70%] left-[60%] text-[9px] font-medium text-white">
                  3
                </div>
              </div>
            </IconButton>
          </Tooltip>
        </div>
        <UserMenu />
      </div>
    </div>
  );
}

export default Header;
