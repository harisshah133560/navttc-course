import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 bg-gray-100 rounded-md mb-4 text-center h-32 flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex items-center justify-center ">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 "
          disabled={count >= 10}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          disabled={count <= 0}
          className="bg-red-500 text-white px-4 py-2 rounded ml-2 "
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          className=" bg-green-500 text-white px-4 py-2 rounded ml-2"
          onClick={() => setCount(0)}
        >
          rest
        </button>
      </div>
    </div>
  );
}
export default Counter;
