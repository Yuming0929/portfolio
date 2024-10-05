import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yuming | Portfolio',
  description: 'Yuming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className}
        bg-gray-50 text-gray-950  pt-28
        sm:pt-36`}>
        <div className='bg-[#fbe2e3] -z-10 absolute top-[-6rem] 
        h-[31.2rem] w-full rounded-full blur-[10rem]
        
        '></div>
        {/* <div className='bg-[#cfddfa] -z-10 absolute top-[50rem] right-[-50rem]
        h-[31.2rem] w-full rounded-full blur-[10rem]
        sm:w-[68.75rem]
        '>
        </div>
        <div className='bg-[#cf565a] -z-10 absolute top-[-60rem] 
        h-[31.2rem] w-full rounded-full blur-[10rem]
        sm:w-[68.75rem]
        '></div> */}

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
        
        
      </body>
    </html>
  )
}
