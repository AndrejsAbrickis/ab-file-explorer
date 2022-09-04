import { useState } from 'react'
import './App.css'
import FileTree from './Components/FileTree'
import RepositorySelect from './Components/RepositorySelect'
import { RepositoryType } from './Constants/RepositoryType'
import { IRepository } from './Models/IRepository'
import { FilesHttpService } from './Services/FilesHttpService'

function App() {
  const [repository, setRepository] = useState<IRepository | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getRepository = (type: RepositoryType) => {
    setIsLoading(true)

    FilesHttpService.get(type).then((repository) => {
      setRepository(repository)
      setIsLoading(false)
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>AB File Explorer</header>
      <RepositorySelect onSelectRepository={getRepository} />
      {repository && (
        <div>
          {isLoading ? (
            <p>Loading repository....</p>
          ) : (
            <div className='App-body'>
              <div className='App-body-sidebar'>
                <FileTree filePaths={repository.filepaths} />
              </div>
              <div className='App-body-content'>{repository.name}</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
