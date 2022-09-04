import { RepositoryType } from '../Constants/RepositoryType'

interface Props {
  selected: string | undefined
  onSelectRepository: (type: RepositoryType) => void
}

function RepositorySelect(props: Props) {
  const repositoryTypes = Object.keys(RepositoryType)

  function onRepositorySelect(event: any) {
    props.onSelectRepository(event.target.value)
  }

  return (
    <select
      title='Repository type'
      onChange={onRepositorySelect}
      value={props.selected?.toLowerCase()}
    >
      <option value=''>Select repository</option>
      {repositoryTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  )
}

export default RepositorySelect
