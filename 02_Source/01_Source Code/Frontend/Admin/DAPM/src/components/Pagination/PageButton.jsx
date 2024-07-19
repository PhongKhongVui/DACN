import clsx from "clsx";

function PageButton({ active, disabled, children, ...rest }) {
  return (
    <button
      className={clsx(
        "border border-[--border-primary] font-light box-border disabled:text-[--text-secondary]",
        "text-sm flex items-center justify-center size-8 rounded",
        disabled ? "opacity-80" : !active && "hover:bg-[#9d9bb925]",
        active ? "bg-[--primary] text-white" : "text-[--link-color]"
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default PageButton;
