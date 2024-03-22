'use client'

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { getMemo1, saveMemo1 } from './serverAction'
import { get } from 'http';

export default function Home() {
  let [memo1, setMemo1] = useState('');
  let [memo2, setMemo2] = useState('');
  let [memo3, setMemo3] = useState('');
  let [memo4, setMemo4] = useState('');
  
  const editMemo1 = (e:any) => {
    setMemo1(e.target.value);
  }

  useEffect(() => {
    getMemo1().then((data) => {
      setMemo1(data)
    })
  }, [])

  return (
    <main className="container" >
        <form className='memo1' action={saveMemo1}>
          <textarea className='border-solid border-2 d-block' onChange={editMemo1} value={memo1} rows={25} cols={40}  ></textarea>
          <button >保存</button>
        </form>

    </main>
  );
}
