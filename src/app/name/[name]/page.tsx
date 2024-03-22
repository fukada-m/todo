import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Name({params}: {params:{name: string}}) {
  return (
    <main>
      <h1 className='bg-primary'>nameのダイナミックテスト</h1>
      <p>あなたの名前は{params.name}だよ</p>
      <div>
        <Link href="/">トップぺーじ</Link>
      </div>
    </main>
  )
}