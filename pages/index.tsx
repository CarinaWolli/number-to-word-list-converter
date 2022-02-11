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
      <h1 className="mb-3 text-3xl font-bold text-seasy">Coding Challenge</h1>
      <h2 className="font-bold text-gray-700 text">Number to word list converter</h2>
      <form className="mt-12 space-y-3" onSubmit={convertNumberToWordList}>
        <input
          id="number"
          type="text"
          value={number}
          placeholder="Number"
          onChange={(e) => setNumber(e.target.value)}
          autoComplete="number"
          required
          className="block px-3 py-2 placeholder-gray-500 border border-gray-300 rounded sm:text-sm"
        />
        <button type="submit" className="px-4 py-2 font-bold text-white rounded bg-seasy hover:bg-seasyDark">
          Convert
        </button>
      </form>
      <div className="p-3 mt-8 bg-gray-100 w-80">
        <p className="text-sm font-bold text-gray-700">All possible letter combinations</p>
        <p className="mt-3 text-xs text-gray-800">{wordList.join(", ")}</p>
      </div>
    </div>
  );
}
