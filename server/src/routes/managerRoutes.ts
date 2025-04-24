import express from "express";
import {
  getManager,
  createManager,
  updateManager,
  getManagerProperties,
} from "../controllers/managerController";

const router = express.Router();

router.get("/:cognitoId", getManager);
router.get("/:cognitoId/properties", getManagerProperties);
router.post("/", createManager);
router.put("/:cognitoId", updateManager);

export default router;
