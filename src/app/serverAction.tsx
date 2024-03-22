"use server"
import fs from 'fs';

const fname = './public/memo1.txt';

export async function saveMemo1(form:any) {
  try {
    const input = form.get('memo1');
    fs.appendFileSync(fname, input + '\n');
    return '保存しました';
  }catch (e:any) {
    return e.message;
  }
}

export async function getMemo1() {
  try {
    return fs.readFileSync(fname, 'utf-8');
  } catch (e:any) {
    return e.message;
  }
}