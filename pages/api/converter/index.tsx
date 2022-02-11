import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { number } = req.body;

  const wordList = letterCombinations(number);

  res.status(200).send({ wordList: wordList });
}

function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];

  const map: { [key: string]: string[] } = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const result: string[] = [];

  function permute(string: string, index: number) {
    if (index === digits.length) {
      result.push(string);
      return;
    }

    for (const x of map[digits[index]]) {
      permute(string + x, index + 1);
    }
  }
  permute("", 0);
  return result;
}
