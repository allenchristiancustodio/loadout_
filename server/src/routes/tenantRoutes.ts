import express from "express";
import {
  getTenant,
  createTenant,
  updateTenant,
  getCurrentResidences,
  removeFavoriteProperty,
  addFavoriteProperty,
} from "../controllers/tenantController";

const router = express.Router();

router.get("/:cognitoId", getTenant);
router.get("/:cognitoId/current-residences", getCurrentResidences);
router.post("/", createTenant);
router.put("/:cognitoId", updateTenant);
router.post("/:cognitoId/favorites/:propertyId", addFavoriteProperty);
router.delete("/:cognitoId/favorites/:propertyId", removeFavoriteProperty);

export default router;
