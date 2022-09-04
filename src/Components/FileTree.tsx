import FileTreeItem from './FileTreeItem'

interface Props {
  filePaths: Array<string>
}

function FileTree(props: Props) {
  const fileTree = new Map<string, string[]>()

  props.filePaths.forEach((path) => {
    const [root, ...rest] = path.split('/')
    const value = [...(fileTree.get(root) || []), rest.join('/')]
    fileTree.set(root, value)
  })

  const fileTreeRoots = [...fileTree.keys()]

  return (
    <div>
      {props.filePaths.length === 0 && <p>Empty repository</p>}
      {fileTreeRoots.map((path) => (
        <FileTreeItem key={path} root={path} paths={[...(fileTree.get(path) || [])]} />
      ))}
    </div>
  )
}

export default FileTree
