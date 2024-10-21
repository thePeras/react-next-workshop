import { Toaster } from 'react-hot-toast'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default: 'Sharing things about L.EIC',
    template: `%s - L.EIC`,
  },
  description: '',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

interface Props {
  children: React.ReactNode,
  feed: React.ReactNode
}

export default function Layout({ children, feed }: Props) {
  return (
    <html className="dark" style={{ colorScheme: 'dark' }} lang="en">
      <body
        className={cn(
          'relative flex min-h-screen w-full bg-background font-sans text-foreground antialiased',
          GeistSans.variable,
        )}
      >
        <main className="flex-1">
          <div className="flex">
            {/* Feed */}
            {feed}

            {/* Resource content */}
            <div
              className='flex-1 flex-col lg:flex flex'
            >
              {children}
            </div>
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  )
}
