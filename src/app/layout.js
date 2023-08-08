import './globals.scss'
import Header from './components/header'

export const metadata = {
  title: 'Aura Dashboard',
  description: 'Aura Dashboard Specification for Companies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
