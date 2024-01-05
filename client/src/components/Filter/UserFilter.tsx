import { TextField } from '@mui/material'
import { ApiUrl } from '../../api/connection'
import { useContext } from 'react'
import { ContextProvider } from '../../context/context'

const UserFilter = () => {
    const { 
    setRepositories,
    setUser
  } = useContext(ContextProvider)

  const handlerUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const user = e.target.value;
    fetch(`${ApiUrl}/github/users/${user}`)
    .then((res) => {
      return res.json();
    }).then((data) => {
      setRepositories(data);
      setUser(user)
    })
  }

  return (
    <>
        <TextField 
            id="outlined-basic" 
            label="User" 
            variant="outlined" 
            onChange={handlerUser}
          />
    </>
  )
}

export default UserFilter