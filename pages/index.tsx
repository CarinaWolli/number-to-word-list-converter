import axios from "axios";
import React, { useState } from "react";

export default function Index() {
  const [number, setNumber] = useState("");
  const [wordList, setWordList] = useState([]);

  const convertNumberToWordList = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const responseWordList = await axios.post("/api/converter", { number: number });
    setWordList(responseWordList.data.wordList);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Coding Challenge</h1>
      <form className="mt-8 space-y-3" onSubmit={convertNumberToWordList}>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <input
              id="number"
              type="text"
              value={number}
              placeholder="Number"
              onChange={(e) => setNumber(e.target.value)}
              autoComplete="number"
              required
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
        </div>
        <button type="submit">Convert</button>
      </form>
      <div>
        <p>All possible letter combinations: {wordList.join(", ")}</p>
      </div>
    </div>
  );
}
