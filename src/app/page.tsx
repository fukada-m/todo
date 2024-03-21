'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Link from 'next/link'


export default function Home() {
  let [input, setInput] = useState("")
  let [message, setMessage] = useState("your name")

  const doChange = (event)=> {
    setInput(event.target.value)
  } 

  const doClick = ()=> {
    setMessage("Hello," + input + "!!")
    setInput("")
  }

  return (
    <main className="container" >
      <h1 className="title bg-primary">Next.jsのサンプル</h1>
      <p className="text-lg">Topぺーじ</p>
      <div>
        <Link href="/pati">ぱっちのぺーじ</Link>
      </div>
      {/* <p>{message}</p>
      <div>
        <input type="text" onChange={doChange} value={input} className="border-solid border-2 border-gray-400"/>
        <button onClick={doClick} className="px-7 bg-blue-800 mx-2 text-white rounded-lg py-2">決定</button>
      </div> */}
    </main>
  );
}
