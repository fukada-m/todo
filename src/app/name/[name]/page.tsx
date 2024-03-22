import Link from 'next/link'

export default function Name({params}: {params:{name: string}}) {
  return (
    <main>
      <h1>nameのダイナミックテスト</h1>
      <p>あなたの名前は{params.name}だよ</p>
      <div>
        <Link href="/">トップぺーじ</Link>
      </div>
    </main>
  )
}