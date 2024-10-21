'use server'

import { Prisma } from '@prisma/client'
import { z } from 'zod'

import Database from '../database'
import { revalidatePath } from 'next/cache'
import { getMetadataFromUrl } from '../utils'

{/* Tarefa #8 - Completa a Server Action para submeter um novo recurso
  - A função deve receber um FormData com o campo "url"
  - A função deve validar o URL
  - A função deve verificar se o recurso já existe
  - A função deve obter informação do recurso utilizando o URL
  - A função deve criar o recurso na base de dados
  - A função deve revalidar o cache da página inicial
  */}
export async function submitResource(
  formData: FormData,
): Promise<{ error?: string } | undefined> {
  try {
    const validatedFields = z
      .object({ url: z.string().url().min(1) })
      .safeParse(Object.fromEntries(formData))

    if (!validatedFields.success) {
      return {
        error: 'Invalid submission!',
      }
    }

    const { url } = validatedFields.data

    // Tarefa #8.1 - Ver se o recurso já existe, se sim, retornar um error
    const existingResource = await Database.existsResource(url);
    if (existingResource) {
      return {
        error: 'URL is already exist!',
      }
    }

    // Tarefa #8.2 - Obter informação do recurso utilizando o URL. Dica: Ver funções importadas
    const metadata = await getMetadataFromUrl(url)

    // Tarefa #8.3 - Criar o recurso na base de dados. Dica: Ver class Database
    await Database.createResource(metadata.title, metadata.description, metadata.thumbnail, url)

    // Tarefa #8.4 - Revalidar o cache da página inicial
    revalidatePath('/')
    return

  } catch (error: any) {
    console.log(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return {
          error: 'URL is already exist!',
        }
      }
    } else {
      return {
        error: 'Something went wrong!',
      }
    }
  }
}
