import Link from 'next/link'

export default function Name({params}: {params:{name: string, pass: string}}) {
  return (
    <main>
      <h1>nameとpageのダイナミックテスト</h1>
      <p>あなたの名前は{params.name}だよ</p>
      <p>あなたのパスワードは{params.pass}だよ</p>
      <div>
        <Link href="/">トップページに戻る</Link>
      </div>
    </main>
  )
}