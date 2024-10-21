import { ResourceCard } from '@/components/feed-resource-card'

import Database from '@/lib/database'

export default async function Default() {
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
