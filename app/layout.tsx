import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Header from '@/components/Header'



export const metadata: Metadata = {
  title: 'Qwikfix Mobil Mechanic',
  description: 'A website for Qwikfix mobile Mechanic Ltd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Header />
        <main className='relative overflow-hidden'>
           {children}
        </main>
       
        <Footer />
        </body>
    </html>
  )
}
