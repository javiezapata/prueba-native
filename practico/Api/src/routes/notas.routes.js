import { request, response, Router } from "express";
import { methods as notasController } from "../controllers/notas.controller";

const router=Router()

router.get("/", notasController.getnotas);
router.get("/:id",notasController.getnota);
router.post("/", notasController.addnotas);
router.put("/:id", notasController.updatetenota);
router.delete("/:id", notasController.deletenota);

export default router;  