import axios from "axios";
import React, { useState } from "react";

export default function Index() {
  const [number, setNumber] = useState(0);
  const [wordList, setWordList] = useState([]);
  const [validNumber, setValidNumber] = useState(true); //numbers that include 0 or 1 are invalid

  const convertNumberToWordList = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const numberStringFormat = number.toString();
    const inludesZeroOrOne = numberStringFormat.includes("0") || numberStringFormat.includes("1");

    if (!inludesZeroOrOne) {
      const responseWordList = await axios.post("/api/converter", { number: numberStringFormat });
      setWordList(responseWordList.data.wordList);
      setValidNumber(true);
    } else {
      setWordList([]);
      setValidNumber(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidNumber(true);
    setNumber(e.target.valueAsNumber);
  };

  return (
    <div>
      <h1 className="mb-3 text-3xl font-bold text-seasy">Seasy - Coding Assignment</h1>
      <h2 className="font-bold text-gray-700 text">Number to word list converter</h2>
      <form className="mt-12 space-y-3" onSubmit={convertNumberToWordList}>
        <input
          id="number"
          type="number"
          value={number.toString()}
          placeholder="Number"
          onChange={handleChange}
          autoComplete="number"
          required
          className="block px-3 py-2 placeholder-gray-500 border border-gray-300 rounded sm:text-sm"
        />
        {!validNumber && (
          <div className="text-xs text-red-700">Invalid number (the digits 0 and 1 are not allowed)</div>
        )}
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
