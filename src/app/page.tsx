'use server'

import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

export default async function Home() {
  return (
    <main className="container" >
      <h1 className="title bg-primary">Next.jsのサンプル</h1>
      <p className="text-lg">Topぺーじ</p>
      <div>
        <form className='form' action={serverAction}>
        <input className='input border' type="number" name='input' />
        <button className='btn'>Click</button>
        </form>
      </div>
      <div>
        <Link href="/pati">ぱっちのぺーじ</Link>
      </div>
    </main>
  );
}
