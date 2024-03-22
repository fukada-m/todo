"use server"
import { Metadata } from "next"

export async function generateMetadata(){
  return {
    title: "第二のトップページ",
  }
}

const defaultProps = {
  title: "第二の静的なトップページ",
  msg: "サンプルメッセージ"
}

export default async function SecondHome(){
  return (
    <main>
      <h1 className='title'>{defaultProps.title}</h1>
      <p className="msg">{defaultProps.msg}</p>
    </main>
  )
}