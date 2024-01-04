/**
 * @author Miguel Coronel
 * @date 01-03-2024
 */
import { Request, Response } from "express";
import service from "../../Services/GithubApiService";

/**
   * Método para obtener todos los commits
*/
const getCommits = async ({ params }: Request, res: Response) => {
    const { user, repo } = params;
    const data = await service.getCommits(user, repo);

    if (!data) return res.status(404).json({ message: "Commits not found" })

    res.status(200).json(data);
};

/**
   * Método para obtene r un commit por su sha
   * @param {sha} string
*/
const getCommitsBySha = async ({ params }: Request, res: Response) => {
    const { user, repo, commit_sha } = params;
    const data = await service.getCommitBySha(user, repo, commit_sha);

    if (!data) return res.status(404).json({ message: "Commit not found" })

    res.status(200).json(data);
}

/**
   * Método para obtener un usuario por su username
   * @param {sha} string
*/
const getRepositories = async ({ params }: Request, res: Response) => {
    const { user } = params;
    const data = await service.getRepositories(user);

    if (!data) return res.status(404).json({ message: "User not found" })

    res.status(200).json(data);
}

export default module.exports = { 
    getCommits,
    getCommitsBySha,
    getRepositories
}
