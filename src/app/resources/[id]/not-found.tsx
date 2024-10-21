import { PaneContainer, PaneContent, PaneHeader } from '@/components/ui/pane'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default function Loading() {
    return (
        <PaneContainer>
            <PaneHeader>
                <Button variant="ghost" size="icon" asChild>
                    <Link href='/'>
                        <ArrowLeftIcon size={16} />
                    </Link>
                </Button>
            </PaneHeader>
            <PaneContent>
                <div className="px-2 py-4 xl:px-6 xl:py-7">
                    Ops: 404 - Not Found
                </div>
            </PaneContent>
        </PaneContainer>
    )
}
