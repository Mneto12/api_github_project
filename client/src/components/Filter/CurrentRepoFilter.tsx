import { Checkbox } from "@mui/material"
import { ApiUrl } from '../../api/connection'
import { useContext } from 'react'
import { ContextProvider } from '../../context/context'

const CurrentRepoFilter = () => {
    const { setCommits } = useContext(ContextProvider)

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
        <span>Show current repo</span>
          <Checkbox
            onChange={handleCurrentRepo}
        />
    </>
  )
}

export default CurrentRepoFilter