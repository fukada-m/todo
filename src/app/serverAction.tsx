"use server"

import fs from 'fs';

const fname1 = './public/memo1.txt';
const fname2 = './public/memo2.txt';
const fname3 = './public/memo3.txt';
const fname4 = './public/memo4.txt';

export async function saveMemo(memos: string[]): Promise<void>{
      fs.writeFileSync(fname1, memos[0], 'utf-8');
      fs.writeFileSync(fname2, memos[1], 'utf-8');
      fs.writeFileSync(fname3, memos[2], 'utf-8');
      fs.writeFileSync(fname4, memos[3], 'utf-8');
}

export async function getMemo(): Promise<string[]>{
  const memos = [];
  memos.push(fs.readFileSync(fname1, 'utf-8'));
  memos.push(fs.readFileSync(fname2, 'utf-8'));
  memos.push(fs.readFileSync(fname3, 'utf-8'));
  memos.push(fs.readFileSync(fname4, 'utf-8'));
  return memos;
}