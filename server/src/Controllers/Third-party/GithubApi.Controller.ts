/**
 * @author Miguel Coronel
 * @date 01-03-2024
 */
import { Request, Response } from "express";
import service from "../../Services/GithubApiService";

/**
   * Método para obtener todos los commits
*/
const getCommits = async (req: Request, res: Response) => {
    const data = await service.getCommits();
    res.status(200).json({
        Commits: data,
    });
};

/**
   * Método para obtene r un commit por su sha
   * @param {sha} string
*/
const getCommitsBySha = async ({ params }: Request, res: Response) => {
    const { sha } = params;
    const data = await service.getCommitBySha(sha);

    if (!data) return res.status(404).json({ message: "Commit not found" })
    
    res.status(200).json({
        Commits: data,
    });
}

export default module.exports = { 
    getCommits,
    getCommitsBySha
}
