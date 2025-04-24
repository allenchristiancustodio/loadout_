import express from "express";
import { getTenant, createTenant ,updateTenant } from "../controllers/tenantController";

const router = express.Router();

router.get("/:cognitoId", getTenant);
router.post("/", createTenant);
router.put("/:cognitoId", updateTenant);

export default router;
