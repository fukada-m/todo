import Link from 'next/link'
import Image from 'next/image'
import styles from './style.module.css'

export default function Pati(){
    return(
        <main className='m-5'>
            <h1 className={styles.title}>ぱっちのぺーじ</h1>
            <p className={styles.msg}>ぱちとパチパチ</p>
            <Image src="/sample.jpg" alt="くま" width={400} height={400}/>
            <Link href="/">トップへ</Link>
        </main>
    )
}

