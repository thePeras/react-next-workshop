import { BookmarkIcon } from 'lucide-react'

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-4">
      <div className="space-y-2 text-center">
        <div className="flex items-center justify-center space-x-1.5">
          <BookmarkIcon size={20} />
          <h1 className="text-xl">L.EIC Resources</h1>
        </div>
        <p className="text-sm">Sharing things about L.EIC</p>
      </div>
    </div>
  )
}