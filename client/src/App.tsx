import { useContext } from 'react'
import Cards from './components/cards';
import { ContextProvider } from './context/context';
import FilterBar from './components/Filter/filterBar';

function App() {
  const { commits } = useContext(ContextProvider)
  return (
    <>
      <div className='Box'>
        <h1>Commits of projects</h1>

        <FilterBar />

        <div className='Cards'>
          { commits.length > 0 && (commits.map((commit: any) => (
            <Cards commit={commit} />
          )))}
        </div>
      </div>
    </>
  )
}

export default App
