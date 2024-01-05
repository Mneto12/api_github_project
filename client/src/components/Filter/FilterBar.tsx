import UserFilter from './UserFilter';
import RepoFilter from './RepoFilter';
import CurrentRepoFilter from './CurrentRepoFilter';
import CommitFilter from './CommitFilter';

const FilterBar = () => {
  return (
    <div className='Inner-box'>
      <RepoFilter />
      <UserFilter />
      <CurrentRepoFilter />
      <CommitFilter />
    </div>
  )
}

export default FilterBar