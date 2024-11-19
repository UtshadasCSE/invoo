"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Container = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("/api/info");
    setData(res.data.info);
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {data?.map((invoo) => (
        <div key={invoo._id} className="my-2 border-b">
          <div>
            <h1 className="text-xl font-bold">{invoo.invoo_title}</h1>
            <p>{invoo.invoo_description}</p>
          </div>
          <div className="flex gap-3 my-3 text-white">
            <Link href={`edit/1}`} className="py-1 px-6 bg-gray-300 rounded-md">
              Edit
            </Link>
            <button className="py-1 px-6 bg-red-600 rounded-md">Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Container;
