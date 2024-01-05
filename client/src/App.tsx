import { useState } from 'react'
import { ApiUrl } from './Api/connection'
import { FormControl, InputLabel, Select, MenuItem, TextField, Checkbox, CheckboxProps } from '@mui/material';

function App() {
  const [commits, setCommits] = useState([]);
  const [repos, setRepo] = useState<any>([]);
  const [user, setUser] = useState([]);
  const [RepoSingle, setRepoSingle] = useState([]);

  const handleUser = (event: any) => {
    const user = event.target.value;
    fetch(`${ApiUrl}/github/users/${user}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRepo(data);
        setUser(user);
      });
  }

  const handleRepos = (event: any) => {
    const repo = event.target.value;
    fetch(`${ApiUrl}/github/${user}/${repo}/commits`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRepoSingle(repo);
        setCommits(data);
      });
  
  }

  const handleSingleCommit = (event: any) => {
    const commit = event.target.value;
    fetch(`${ApiUrl}/github/${user}/${RepoSingle}/commit/${commit}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCommits(data);
      });
  
  }

  const handleCurrentRepo = (event: any) => {
    if(!event.target.checked) {
      setCommits([]);
      return;
    }
    fetch(`${ApiUrl}/github/Mneto12/api_github_project/commits`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCommits(data);
      });
  }

  return (
    <>
      <div className='Box'>
        <h1>Commits of project</h1>
        <div className='Inner-box'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Repositories</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
              label='Repositories'
              onChange={handleRepos}
            >
              {
                repos.length > 0 && ((repos.map((repo: any) => (
                  <MenuItem value={repo.name}>{repo.name}</MenuItem>
                ))))
              }
            </Select>
          </FormControl>

          <TextField 
            id="outlined-basic" 
            label="User" 
            variant="outlined" 
            onChange={handleUser}
          />

          <TextField 
            id="outlined-basic" 
            label="Sha commit" 
            variant="outlined" 
            onChange={handleSingleCommit}
          />

          <span>Show current repo</span>
          <Checkbox
            onChange={handleCurrentRepo}
          />
        </div>

        <div className='Cards'>
        { commits.length > 0 && (commits.map((commit: any) => (
          <div className='Card'>
            <p>Author: {commit.author}</p>
            <p>Message: {commit.message}</p>
            <p>Date: {commit.date}</p>
            <div className='Bottom-card'>
              <p>ID: {commit.sha}</p>
            </div>
          </div>
        )))}
        </div>
      </div>
    </>
  )
}

export default App
