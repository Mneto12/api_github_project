import { Router } from "express";
import controller from '../Controllers/Third-party/GithubApi.Controller'
const router = Router();

router.get("/:user/:repo/commits", controller.getCommits);
router.get("/:user/:repo/commit/:commit_sha", controller.getCommitsBySha);
router.get("/users/:user", controller.getRepositories);

export { router };