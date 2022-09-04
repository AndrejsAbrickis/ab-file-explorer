import { useState } from 'react'
import './App.css'
import RepositorySelect from './Components/RepositorySelect'
import { RepositoryType } from './Constants/RepositoryType'
import { IRepository } from './Models/IRepository'
import { FilesHttpService } from './Services/FilesHttpService'

function App() {
  const [repository, setRepository] = useState<IRepository | null>(null)

  const getRepository = (type: RepositoryType) => {
    FilesHttpService.get(type).then((repository) => {
      setRepository(repository)
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>AB File Explorer</header>
      <div className='App-body'>
        <RepositorySelect onSelectRepository={getRepository} />
        {repository && (
          <div>
            <div className='App-body-sidebar'>sidebar</div>
            <div className='App-body-content'>
              {repository.filepaths.map((path) => (
                <div key={path}>{path}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
