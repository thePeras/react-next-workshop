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

  {/* Descomenta para testares o componente ResourceCard
  return <ResourceCard resource={
    {
      id: '671547acd4ab25fe00067015',
      title: 'Moodle UP 24/25',
      description: 'O Moodle UP 24/25 é a plataforma de e-learning da Universidade do Porto.',
      thumbnail: 'https://moodle2425.up.pt/theme/image.php/boost4uporto/theme/1729005794/frontpage/fpimg-01',
      url: 'https://moodle2425.up.pt/',
      createdAt: new Date('2024-10-20T18:10:51.773Z'),
      updatedAt: new Date('2024-10-20T18:10:51.773Z'),
    }
  } />
   */}

}