import { IRepository } from '../Models/IRepository'
const useUrl = (file = 'empty') => `https://ab-file-explorer.athleticnext.workers.dev/?file=${file}`

export class FilesHttpService {
  static async get(fileName: string): Promise<IRepository> {
    const url = useUrl(fileName)
    const response = await fetch(url)

    if (!response?.ok) {
      throw Error(`Failed to fetch ${url}`)
    }

    const data = await response.json()

    return data
  }
}
