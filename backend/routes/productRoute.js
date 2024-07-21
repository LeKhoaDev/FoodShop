import express from "express";
import { addProduct, listProduct, removeProduct } from "../controllers/productController.js";
import multer from "multer";

const productRouter = express.Router();

// Image Store Engine
const stogare = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: stogare })

productRouter.post("/add", upload.single("image"), addProduct)
productRouter.get("/list", listProduct)
productRouter.post("/remove", removeProduct)

export default productRouter;