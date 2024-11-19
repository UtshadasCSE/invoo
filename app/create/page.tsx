"use client";
import axios from "axios";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Createpage = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    await axios
      .post("/api/info", data)
      .then((res) => {
        reset();
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-[500px] mx-auto">
      <Toaster />
      <div>
        <h2 className="text-lg font-semibold my-4">Add new invoo</h2>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <input
              {...register("invoo_title", { required: true })}
              type="text"
              name="invoo_title"
              placeholder="Add invoo title"
              className="border-2 border-gray-400 p-2 rounded"
            />
            {errors.invoo_title && (
              <span className="text-red-600">This field is required!</span>
            )}
            <textarea
              {...register("invoo_description", { required: true })}
              name="invoo_description"
              rows={4}
              placeholder="Write invoo description"
              className="border-2 border-gray-400 p-2 rounded"
            />
            {errors.invoo_description && (
              <span className="text-red-600">This field is required!</span>
            )}
            <button
              type="submit"
              className="bg-black p-2 rounded-md text-white hover:bg-gray-400 hover:text-black duration-150"
            >
              Add New Invoo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createpage;
