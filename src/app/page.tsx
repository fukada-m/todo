'use client'

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { getMemo, saveMemo } from './serverAction'

export default function Home() {
  const [memo1, setMemo1] = useState('');
  const [memo2, setMemo2] = useState('');
  const [memo3, setMemo3] = useState('');
  const [memo4, setMemo4] = useState('');
  const memos = [memo1, memo2, memo3, memo4];
  
  const editMemo = (index: number, e:any) => {
    const value = e.target.value;
    if (index === 0) setMemo1(value);
    else if (index === 1) setMemo2(value);
    else if (index === 2) setMemo3(value);
    else if (index === 3) setMemo4(value);
  }

  useEffect(() => {
      getMemo().then((data) => {
        setMemo1(String(data[0]));
        setMemo2(String(data[1]));
        setMemo3(String(data[2]));
        setMemo4(String(data[3]));
    })
  }, [])

  useEffect(() => {
    if (memo1 === '' && memo2 === '' && memo3 === '' && memo4 === '') {
      return;
    }
    saveMemo(memos)
  }, [memos])

  return (
    <main className="container" >
          {memos.map((memo, index) => (
            <textarea key={index} className='border-solid border-2 m-1' onChange={(e) => editMemo(index, e)} name={memo} value={memo} rows={25} cols={33}></textarea>
          ))}
    </main>
  );
}
