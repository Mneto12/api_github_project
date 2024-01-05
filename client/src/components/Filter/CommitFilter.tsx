import { TextField } from "@mui/material"
import { ApiUrl } from '../../api/connection'
import { useContext } from 'react'
import { ContextProvider } from '../../context/context'

const CommitFilter = () => {
    const { 
        repo, 
        user, 
        setCommits 
    } = useContext(ContextProvider)

    const handleSingleCommit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const commit = e.target.value;
        fetch(`${ApiUrl}/github/${user}/${repo}/commit/${commit}`)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setCommits(data);
        });
        
    }
  return (
    <>
        <TextField 
            id="outlined-basic" 
            label="ID"
            disabled={repo.length === 0 ? true : false}
            variant="outlined" 
            onChange={handleSingleCommit}
        />
    </>
  )
}

export default CommitFilter