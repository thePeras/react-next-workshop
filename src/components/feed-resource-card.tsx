'use client' // Questão: Será necessário usar use client?

import Link from 'next/link'
import { Resource } from '@prisma/client'

import { useParams } from 'next/navigation'
import { formatDate } from '@/lib/utils'

{/* 
  Tarefa #1 - Criar uma card de um recurso
    - O componente deve receber um recurso do tipo Resource
    - O componente deve ter um link para a página do recurso
    - (opcional) O componente pode ter uma cor de fundo diferente se o recurso estiver selecionado
  
  html de uma card exemplo:

    <article>
      <a href="/resources/:id" class="inline-flex size-full flex-col space-y-1 rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring xl:p-3">
        <div class="flex justify-between space-x-2 text-xs">
          <span>moodle2324.up.pt</span>
          <span>Data</span>
        </div>
        <div>
          <h2 class="line-clamp-2 text-foreground">Título</h2>
          <p class="line-clamp-1">Descrição</p>
        </div>
      </a>
    </article>
  
  */}

interface Props {
  resource: Resource
}

export function ResourceCard({ resource }: Props) {
  const params = useParams<{ id: string }>()

  return (
    <article>
      <Link
        className={`${params.id === resource.id && 'bg-accent'} inline-flex size-full flex-col space-y-1 rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring xl:p-3`}
        href={`/resources/${resource.id}`}
        prefetch
      >
        <div className="flex justify-between space-x-2 text-xs">
          <span>{new URL(resource.url).hostname}</span>
          <span>{formatDate(resource.createdAt)}</span>
        </div>
        <div>
          <h2 className="line-clamp-2 text-foreground">{resource.title}</h2>
          <p className="line-clamp-1">{resource.description}</p>
        </div>
      </Link>
    </article>
  )
}
