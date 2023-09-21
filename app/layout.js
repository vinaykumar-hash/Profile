import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vinay kumar',
  description: 'Programmer,Web Designer,Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet"></link>
      <body className='overflow-x-hidden'>
        {children}
      </body>
    </html>
  )
}
