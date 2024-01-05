import { commit } from "../interfaces/commits"

const Cards = ({commit}: any) => {
  return (
    <div className='Card'>
        <p>Author: {commit.author}</p>
        <p>Message: {commit.message}</p>
        <p>Date: {commit.date}</p>
        <div className='Bottom-card'>
            <p>ID: {commit.sha}</p>
        </div>
    </div>
  )
}

export default Cards