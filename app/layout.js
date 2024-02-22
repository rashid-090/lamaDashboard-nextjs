import { Inter } from 'next/font/google'
import './ui/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lama Dev Next.js Admin Dashboard',
  description: 'Next.js 14 Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer/>
        {children}
        </body>
    </html>
  )
}
