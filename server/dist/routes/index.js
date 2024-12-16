import { Router } from 'express';
import articleRoutes from "./article_routes.js";
const router = Router();
router.use("/article", articleRoutes);
export default router;
