/* eslint-disable react/prop-types */

const Increment = ({ count, incrementFunc, decrementFunc }) => {
  return (
    <div className=" mx-auto my-10 flex items-center bg-gray-50 justify-center">
      <div className="bg-white shadow-xl w-1/3 rounded-lg px-10 py-12">
        <h4 className="text-center text-3xl font-semibold">{count}</h4>
        <div className="space-x-10 text-center mt-10">
          <button onClick={incrementFunc} className="py-2 px-6 bg-green-400 text-white font-semibold rounded-md">
            Increment
          </button>
          <button onClick={decrementFunc} className="py-2 px-6 bg-red-400 text-white font-semibold rounded-md">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Increment;
