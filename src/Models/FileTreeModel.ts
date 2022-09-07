export class FileTreeModel {
  #fileTree: Map<string, string[]> = new Map<string, string[]>()

  constructor(private readonly filePaths: string[]) {
    this.#buildFileTree()
  }

  #buildFileTree() {
    this.filePaths.forEach((path: string) => {
      const [root, ...rest] = path.split('/')
      const value = [...(this.#fileTree.get(root) || []), rest.join('/')]
      this.#fileTree.set(root, value)
    })
  }

  getRoots(): string[] {
    return [...this.#fileTree.keys()]
  }

  get(root: string): string[] {
    return this.#fileTree.get(root) || []
  }
}
