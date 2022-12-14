import { useEffect, useState } from 'react'
import './App.css'
import FileTree from './Components/FileTree'
import RepositorySelect from './Components/RepositorySelect'
import { LocalStorageKeys } from './Constants/LocalStorageConstants'
import { RepositoryType } from './Constants/RepositoryType'
import { IRepository } from './Models/IRepository'
import { FilesHttpService } from './Services/FilesHttpService'
import { LocalStorageService } from './Services/LocalStorageService'

function App() {
  const [repository, setRepository] = useState<IRepository | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (repository) {
      return
    }

    getRepository(LocalStorageService.get(LocalStorageKeys.repository), false)
  })

  const getRepository = (type: RepositoryType, clearExpandedPaths = true) => {
    if (clearExpandedPaths) {
      LocalStorageService.clear(LocalStorageKeys.expandedPaths)
    }

    setIsLoading(true)
    LocalStorageService.set(LocalStorageKeys.repository, type)

    FilesHttpService.get(type).then((repository) => {
      setRepository(repository)
      setIsLoading(false)
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>AB File Explorer</header>
      <RepositorySelect onSelectRepository={getRepository} selected={repository?.name} />
      {repository && (
        <div>
          {isLoading ? (
            <p>Loading repository....</p>
          ) : (
            <div className='App-body'>
              <FileTree filePaths={repository.filepaths} />
              <div className='App-body-content__wrapper'>
                <div className='App-body-content'>Selected repository: {repository.name}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
