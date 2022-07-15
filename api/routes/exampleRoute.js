import express from "express";
import { exampleController } from "../controllers/exampleController.js";

const router = express.Router();

router.route("/").post(exampleController);

export default router;
