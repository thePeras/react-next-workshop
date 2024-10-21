import { prisma } from '@/lib/db'
import { Resource } from '@prisma/client'

// This is a wrapper around Prisma methods to manage resources
export default class Database {
  static async getAllResources(): Promise<Resource[]> {
    return await prisma.resource.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
  }

  static async getResourceById(id: string): Promise<Resource | null> {
    // if the provided id is not a valid mongodb ObjectId, return null
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return null
    }


    return await prisma.resource.findUnique({
      where: {
        id: id,
      }
    })
  }

  static async existsResource(url: string): Promise<Resource | null> {
    return await prisma.resource.findFirst({
      where: {
        url: {
          endsWith: url,
        },
      },
    })
  }

  static async createResource(title: string, description: string, thumbnail: string, url: string): Promise<Resource> {
    return await prisma.resource.create({
      data: {
        title,
        description,
        thumbnail,
        url,
      },
    })
  }
}
