import { IRepository } from './IRepository'

export class FileExplorer {
  filepaths: string[]

  constructor({ filepaths }: IRepository) {
    this.filepaths = filepaths
  }
}
