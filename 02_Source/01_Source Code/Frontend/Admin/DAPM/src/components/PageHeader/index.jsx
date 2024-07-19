function PageHeader({ children }) {
  return (
    <div className="h-10 font-semibold text-gray-800 px-6 flex items-center bg-white shadow">
      {children}
    </div>
  );
}

export default PageHeader;
