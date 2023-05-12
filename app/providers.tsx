 'use client'
 
 import { ThemeProvider } from "next-themes"
 import Navbar from "@/components/Navbar"
 import Footer from "@/components/Footer"
 import BackToTop from "@/components/BackToTop"

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
    </ThemeProvider>
  )
}

export default Providers