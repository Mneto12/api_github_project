import { Router } from "express";
import controller from '../Controllers/Third-party/GithubApi.Controller'
const router = Router();

router.get("/", controller.getCommits);
router.get("/:sha", controller.getCommitsBySha);

export { router };