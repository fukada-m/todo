import Link from 'next/link'
import Image from 'next/image'

export default function pati(){
    return(
        <main>
            <h1>ぱっちのぺーじ</h1>
            <Image src="/sample.jpg" alt="くま" width={400} height={400}/>
            <Link href="/">トップへ</Link>
        </main>
    )
}

