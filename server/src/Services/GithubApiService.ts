import { Commit } from '../Interfaces/Commits'
import thirdParty from '../Lib/GithubApi'

/**
   * Método para obtener todos los commits
   * @returns {Promise<Commmits>}
*/
const getCommits = async (): Promise<Commit[] | undefined> => {
    const commits =  await thirdParty.getCommits()

    if (!commits) return

    return transformCommits(commits)
}

const getCommitBySha = async (sha: string): Promise<Commit | undefined> => {
    return await thirdParty.getCommitBySha(sha)
}

// Transforma la estructura de los commits a una mas sencilla
const transformCommits = (commits: any): any => {
    return commits.map((commit: any) => {
        return {
            sha: commit.sha,
            message: commit.commit.message,
            author: commit.commit.author.name,
            date: commit.commit.author.date
        }
    })
}

export default module.exports = { 
    getCommits,
    getCommitBySha 
}