import FileTreeItem from './FileTreeItem'

interface Props {
  filePaths: Array<string>
}

function FileTree(props: Props) {
  return (
    <div>
      {props.filePaths.map((path) => (
        <FileTreeItem key={path} path={path} />
      ))}
    </div>
  )
}

export default FileTree
