import './style.css'

export default function PatiLayout({
  children,
}: {
  children: React.ReactNode
}){
  return (
    <html lang="ja">
      <body>
        <header className='header'>Sample Pati Apprication</header>
        {children}
        <footer className='footer'>© 2021 Pati Apprication</footer>
      </body>
    </html>
  )
}