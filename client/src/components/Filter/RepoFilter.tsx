import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ApiUrl } from '../../api/connection'
import { useContext } from 'react'
import { ContextProvider } from '../../context/context'

const RepoFilter = () => {
    const { 
        setRepo,
        setCommits,
        user,
        repositories
    } = useContext(ContextProvider)

    const handleRepositories = (e: any) => {
        const repository = e.target.value
        fetch(`${ApiUrl}/github/${user}/${repository}/commits`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data)
          setRepo(repository);
          setCommits(data);
        });
      }
  return (
    <>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Repositories</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
              label='Repositories'
              onChange={handleRepositories}
            >
              {
                repositories.length > 0 && ((repositories.map((repo: any) => (
                  <MenuItem key={repo.name} value={repo.name}>{repo.name}</MenuItem>
                ))))
              }
            </Select>
        </FormControl>
    </>
  )
}

export default RepoFilter