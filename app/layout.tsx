import "../styles/globals.css"
import Providers  from "./providers"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head />
      <body className="dark:bg-stone-900">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
