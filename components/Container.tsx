import Link from "next/link";
import React from "react";

const Container = () => {
  return (
    <div className="my-2 border-b">
      <div>
        <h1 className="text-xl font-bold">Hello Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci
          neque corporis, incidunt ipsam ducimus quam nesciunt. Odit, recusandae
          deleniti!
        </p>
      </div>
      <div className="flex gap-3 my-3 text-white">
        <Link href={`edit/1}`} className="py-1 px-6 bg-gray-300 rounded-md">
          Edit
        </Link>
        <button className="py-1 px-6 bg-red-600 rounded-md">Delete</button>
      </div>
    </div>
  );
};

export default Container;
