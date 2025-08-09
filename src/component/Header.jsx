import React from "react";

const Header = ({onSearch}) => {
  const [textSearch, setTextSearch] = React.useState("");
  return (
    <div className="p-4 bg-black flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <h1 className="text-red-700 text-[40px] font-bold uppercase">MDUC</h1>
        <nav className="space-x-4 items-center flex">
          <a href="#" className="text-white hover:text-red-500">
            Home
          </a>
          <a href="#" className="text-white hover:text-red-500">
            About
          </a>
          <a href="#" className="text-white hover:text-red-500">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-3 rounded bg-gray-800 text-white outline-0"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
        />
        <button 
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={() => onSearch(textSearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
