import './FileTreeItem.css'
import { getIconForFile, getIconForFolder } from 'vscode-icons-js'
import { useState } from 'react'
import FileTree from './FileTree'

interface Props {
  root: string
  paths: string[]
}

function FileTreeItem(props: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [firstSegment] = props.root.split('/')
  const fileNameSegments = firstSegment.split('.')
  const hasExtension = fileNameSegments.length > 1
  const icon = hasExtension ? getIconForFile(firstSegment) : getIconForFolder(firstSegment)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <div className='File-tree-item'>
        <span className={props.paths.length === 1 ? 'File-tree-item__arrow_transparent' : ''}>
          {isExpanded ? '-' : '+'}
        </span>
        <img
          src={`https://dderevjanik.github.io/vscode-icons-js-example/icons/${icon}`}
          alt=''
          width='24'
        />
        {props.paths.length === 1 ? (
          <span className='File-tree-item__filename' title={firstSegment}>
            {firstSegment}
          </span>
        ) : (
          <button
            type='button'
            className='File-tree-item__filename File-tree-item__foldername'
            title={firstSegment}
            onClick={toggleExpanded}
          >
            {firstSegment}
          </button>
        )}
      </div>
      {isExpanded && (
        <div className='File-tree-item__child-tree'>
          <FileTree filePaths={props.paths} />
        </div>
      )}
    </div>
  )
}

export default FileTreeItem
4
