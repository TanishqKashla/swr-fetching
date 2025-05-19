// app/layout.js
import { Toaster } from 'sonner'
import './globals.css'

export const metadata = {
  title: 'SWR Mini Project',
  description: 'Users fetched with SWR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <main className="max-w-4xl mx-auto px-4 py-10">
          <Toaster position="top-right" richColors />
          {children}
        </main>
      </body>
    </html>
  )
}
