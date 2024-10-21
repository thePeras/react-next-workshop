'use server'

import { Prisma } from '@prisma/client'
import { z } from 'zod'

import Database from '../database'
import { revalidatePath } from 'next/cache'
import { getMetadataFromUrl } from '../utils'

{/* Tarefa #7 - Completa a Server Action para submeter um novo recurso
  - A função recebe um FormData com o campo "url"
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
    // Validation using Zod (Do not worry about this)
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

    // Tarefa #8.2 - Obter informação do recurso utilizando o URL. Dica: Ver funções importadas

    // Tarefa #8.3 - Criar o recurso na base de dados. Dica: Ver class Database

    // Tarefa #8.4 - Revalidar o cache da página inicial

    return

  } catch (error: any) {
    console.log(error)
    // Errors related to Prisma (Do not worry about this)
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
