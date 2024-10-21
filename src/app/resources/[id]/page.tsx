import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  ShareIcon,
} from 'lucide-react'

import { PaneContainer, PaneContent, PaneHeader } from '@/components/ui/pane'
import { Button } from '@/components/ui/button'

import { formatDate } from '@/lib/utils'
import Database from '@/lib/database'
import Counter from './counter'

interface Props {
  params: {
    id: string
  }
}

{/* Tarefa #4 - Escreve o Metadata consoante o recurso
  
  Inspeciona o website e verifica dentro do <head> se o title e a descrição estão a ser preenchidos.
  Dica: Consulta os slides à procura do generateMetadata.

*/}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resource = await Database.getResourceById(params.id)

  if (!resource) {
    throw notFound()
  }

  return {
    title: `${resource.title}`,
    description: resource.description,
    openGraph: {
      title: resource.title,
      description: resource.description,
      images: [
        {
          url: resource.thumbnail || '/images/placeholder.jpg',
          alt: resource.title,
        },
      ],
    },
  }
}


{/* Tarefa #3 - Adptar a página de um recurso consoante o recurso selecionado
  
  - Deves começar por conhecer o id do recurso que está presente no url.
  - Usar o id para ir buscar o recurso à base de dados.
  - Se o recurso não existir, podes mostrar uma página de erro 404.
  - Se o recurso não tiver thumbnail, usa a imagem que existe em /public/images/placeholder.jpg.
  
*/}

export default async function Page({ params }: Props) {

  const resource = await Database.getResourceById(params.id)

  if (!resource) {
    throw notFound()
  }

  return (
    <PaneContainer>
      <PaneHeader className="justify-between xl:px-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href='/'>
            <ArrowLeftIcon size={16} />
          </Link>
        </Button>

        {/* (Bonus) - Meter este botão a copiar o link do recurso */}
        <Button variant="ghost" size="icon">
          <ShareIcon size={16} />
        </Button>

      </PaneHeader>
      <PaneContent>
        <div className="px-2 py-4 xl:px-3 xl:py-7">
          <div className="grid grid-cols-1 gap-4 xl:gap-8 2xl:grid-cols-3 2xl:flex-row">
            <div className="2xl:col-span-2">
              <div className="flex w-full flex-col space-y-4 text-muted-foreground">
                <div className="flex items-center justify-between space-x-2 text-xs text-muted-foreground">
                  <span>{formatDate(resource.createdAt)}</span>
                  <Counter resourceId={resource.id} />
                </div>
                <div className="space-y-4">
                  <Link
                    className="flex flex-col transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    href={resource.url}
                    target="_blank"
                  >
                    <h1 className="text-xl text-foreground">
                      {resource.title}
                    </h1>
                    <div className="flex items-center space-x-1 text-sm">
                      <ExternalLinkIcon size={14} />
                      <span>{new URL(resource.url).hostname}</span>
                    </div>
                  </Link>
                  <p>{resource.description}</p>
                </div>
              </div>
            </div>
            <div className="order-first 2xl:order-last 2xl:col-span-1">
              <div className="flex w-full justify-center">
                <Link
                  className="relative inline-flex overflow-hidden rounded-lg bg-secondary"
                  href={resource.url}
                  target="_blank"
                >
                  <Image
                    src={resource.thumbnail || '/images/placeholder.jpg'}
                    alt={resource.title}
                    width={1024}
                    height={537}
                    unoptimized
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PaneContent>
    </PaneContainer>
  )
}
