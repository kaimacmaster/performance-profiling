"use client";

import { useState } from "react";

type Props = {
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
};

const Item = ({ id, value, onChange }: Props) => {
  return (
    <form className="bg-gray-100 p-5 rounded-md flex flex-col space-y-2.5 shadow-sm shadow-gray-300">
      <h5 className="text-xs text-red-500 font-bold">
        RE-RENDER {(Math.random() * 100).toFixed()}
      </h5>
      <label className="mb-2" htmlFor="text">
        Item
      </label>
      <input
        className="border border-gray-200 rounded-md px-2.5 py-1.5 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        type="text"
        name="text"
        id="text"
        onChange={(e) => onChange(id, e.target.value)}
        value={value}
      />
    </form>
  );
};

function RenderingExample() {
  const [itemValues, setItemValues] = useState([
    { value: "", id: "1" },
    { value: "", id: "2" },
    { value: "", id: "3" },
  ]);

  const changeValue = (id: string, value: string) => {
    setItemValues((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          item.value = value;
        }
        return item;
      })
    );
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <header className="bg-gray-800 text-white p-5 rounded-md mb-10 text-center min-w-full shadow-sm shadow-gray-300">
        <h1>Parent holds the state and passes it to items.</h1>
        <pre className="bg-gray-600 text-white mt-5 p-2.5 rounded-md text-left">
          {JSON.stringify(itemValues, null, 2)}
        </pre>
      </header>
      <div className="flex space-x-4">
        {itemValues.map((itemValue) => (
          <Item
            key={itemValue.id}
            id={itemValue.id}
            value={itemValue.value}
            onChange={changeValue}
          />
        ))}
      </div>
    </div>
  );
}

export default RenderingExample;
