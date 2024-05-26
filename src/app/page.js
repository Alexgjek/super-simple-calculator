'use client';

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");


  function handleButtonClick(value) {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error')
      }
    } else if (value === 'C') {
      setInput('')
    }
    else {
      setInput(input + value)
    }
  }

  return (
    <div>
      <h1 className="absolute text-white text-4xl text-center w-full p-10 font-bold">Super Simple Calculator</h1>
      <div className="flex h-screen items-center justify-center">
        <div className="bg-gray-500 max-w-3/4 max-h-2/6 p-2 border border-black">
          <input
            type="text"
            className="w-full h-16 text-right text-2xl px-2 rounded-md border border-black"
            value={input}
            readOnly
            placeholder=""
          />
            <div className="grid grid-cols-4 gap-2 bg-gray-500 w-full flex-grow mt-2 p-2">
            {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "C"].map((button) => (
              <button
                key={button}
                className="bg-gray-100 py-2 px-6 rounded-md text-xl border border-black shadow-lg"
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
