import { FileTreeModel } from './FileTreeModel'

const FILEPATHS = [
  '.editorconfig',
  'src/commands/benchmark.ts',
  'src/commands/play.ts',
  'src/commands/testBoard.ts',
  'src/commands/testStrategy.ts',
  'yarn.lock',
]

describe(FileTreeModel.name, () => {
  let fileTreeModel: FileTreeModel

  beforeEach(() => {
    fileTreeModel = new FileTreeModel(FILEPATHS)
  })

  it('should return file tree roots', () => {
    expect(fileTreeModel.getRoots()).toStrictEqual(['.editorconfig', 'src', 'yarn.lock'])
  })

  it('should return file paths by root key', () => {
    expect(fileTreeModel.get('src')).toStrictEqual([
      'commands/benchmark.ts',
      'commands/play.ts',
      'commands/testBoard.ts',
      'commands/testStrategy.ts',
    ])
  })
})
