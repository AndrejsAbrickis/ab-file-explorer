import './FileTreeItem.css'
import { getIconForFile, getIconForFolder } from 'vscode-icons-js'

interface Props {
  path: string
}

function FileTreeItem(props: Props) {
  const [firstSegment] = props.path.split('/')
  const fileNameSegments = firstSegment.split('.')
  const hasExtension = fileNameSegments.length > 1
  const icon = hasExtension ? getIconForFile(firstSegment) : getIconForFolder(firstSegment)

  return (
    <div className='File-tree-item'>
      <img
        src={`https://dderevjanik.github.io/vscode-icons-js-example/icons/${icon}`}
        alt='file'
        width='24'
      />
      <span className='File-tree-item__filename'>{firstSegment}</span>
    </div>
  )
}

export default FileTreeItem
4
