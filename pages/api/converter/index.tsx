
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const wordList = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

  res.status(200).send({ wordLIst: wordList });
}
