import { FileTreeModel } from '../Models/FileTreeModel'
import FileTreeItem from './FileTreeItem'

interface Props {
  filePaths: Array<string>
}

function FileTree(props: Props) {
  const fileTree = new FileTreeModel(props.filePaths)

  return (
    <div>
      {props.filePaths.length === 0 && <p>Empty repository</p>}
      {fileTree.getRoots().map((path) => (
        <FileTreeItem key={path} root={path} paths={[...(fileTree.get(path) || [])]} />
      ))}
    </div>
  )
}

export default FileTree

FileTree.defaultProps = {
  filePaths: [],
}
