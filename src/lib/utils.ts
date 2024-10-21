import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import urlMetadata from 'url-metadata'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number | Date): string {
  return new Date(input).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export async function getMetadataFromUrl(url: string) {
  const metadata = await urlMetadata(url)
  return {
    title: metadata['og:title'] || metadata.title,
    description: metadata['og:description'] || metadata.description,
    thumbnail: metadata['og:image'] || metadata.image,
  }
}