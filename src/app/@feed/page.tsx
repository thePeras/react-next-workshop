import { ResourceCard } from '@/components/feed-resource-card'
import Database from '@/lib/database';

{/* Tarefa #2 - Listar todos os recursos usando o ResourceCard 

  Se não existirem recursos, mostrar uma mensagem a dizer "No resources found.""
  Exemplo:
    <div className="flex items-center justify-center py-16 text-muted-foreground">
      <span>No resources found.</span>
    </div>

  Se existirem recursos, mostrar uma lista fazendo o uso do componente ResourceCard.
    - Não te esqueças do key  
*/}

export default async function Page() {
  const resources = await Database.getAllResources();

  if (!resources.length) {
    return (
      <div className="flex items-center justify-center py-16 text-muted-foreground">
        <span>No resources found.</span>
      </div>
    )
  }

  return (
    <ul className="space-y-0.5 py-2 xl:py-4">
      {resources.map((resource) => (
        <li key={resource.id}>
          <ResourceCard resource={resource} />
        </li>
      ))}
    </ul>
  )
}