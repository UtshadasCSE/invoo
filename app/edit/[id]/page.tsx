import React from "react";

const Editpage = () => {
  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <div>
          <h2 className="text-lg font-semibold my-4">Update invoo</h2>
          <div>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                name="invoo_title"
                placeholder="Add invoo title"
                className="border-2 border-gray-400 p-2 rounded"
              />
              <textarea
                name="invoo_desc"
                rows={4}
                placeholder="Write invoo description"
                className="border-2 border-gray-400 p-2 rounded"
              />
              <button className="bg-black p-2 rounded-md text-white hover:bg-gray-400 hover:text-black duration-150">
                Update Invoo
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editpage;
