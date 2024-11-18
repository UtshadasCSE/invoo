import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-[500px] m-auto bg-green-400 p-4 rounded-b-lg">
      <Link href={"/"}>
        <h2 className="font-bold text-2xl">Invoo</h2>
      </Link>
      <div>
        <Link href={"/create"} className="bg-white text-black p-2 rounded-md">
          Add New
        </Link>
      </div>
    </div>
  );
};

export default Header;
