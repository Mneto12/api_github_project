import { 
    createContext,
    useState
 } from "react";

interface ContextProps {
    commits: Array<any>
    repositories: Array<any>
    user: Array<any>
    repo: Array<any>
    setCommits: Function
    setRepositories: Function
    setUser: Function
    setRepo: Function
}

export const ContextProvider = createContext({} as ContextProps)

const Provider = ({ children }: any) => {
    const [commits, setCommits] = useState([]);
    const [repositories, setRepositories] = useState<any>([]);
    const [user, setUser] = useState([]);
    const [repo, setRepo] = useState([]);

    return (
        <ContextProvider.Provider
            value={{
                commits,
                setCommits,
                setRepo,
                repo,
                repositories,
                setRepositories,
                setUser,
                user
            }}
        >
            {children}
        </ContextProvider.Provider>
    )
}

export default Provider