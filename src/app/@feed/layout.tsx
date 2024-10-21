import { PaneContainer, PaneContent, PaneHeader } from '@/components/ui/pane'
import { SubmitResourceForm } from '@/components/submit-resource-form';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlusIcon } from 'lucide-react';

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <aside className="w-full border-r lg:flex lg:max-w-sm">
      <PaneContainer>
        <PaneHeader className="flex justify-between">
          <h1>L.EIC Resources</h1>

          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex size-4 transition-colors hover:text-accent-foreground">
                <PlusIcon size={16} />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Submit a new resource</DialogTitle>
                <DialogDescription>
                  Just paste the URL of the resource you want to share
                </DialogDescription>
              </DialogHeader>
              <SubmitResourceForm />
            </DialogContent>
          </Dialog>
        </PaneHeader>
        <PaneContent>{children}</PaneContent>
      </PaneContainer>
    </aside>
  )
}
