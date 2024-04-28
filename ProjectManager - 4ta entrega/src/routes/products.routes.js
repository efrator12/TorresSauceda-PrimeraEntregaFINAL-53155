import { Router, response } from "express";
import productManager from "../managers/ProductManager.js";

const router = Router();

const getProduct = async (req, resp) => {
  try {
    const { limit } = req.query;
    const products = await productManager.getProducts(parseInt(limit));
    if (products.length > 0 && limit != 0) {
      resp.status(200).json({ response: products });
    } else {
      throw new Error();
    }
  } catch (error) {
    resp.status(400).json({ response: "Sin productos en catalago" });
  }
};

const getByID = async (req, resp) => {
  try {
    const { pid } = req.params;
    const product = await productManager.getProductByID(parseInt(pid));
    resp.status(200).json({ response: product });
  } catch (error) {
    resp.status(404).json({ error: error.message });
  }
};

const addProduct = async (req, resp) => {
  try {
    const product = req.body;
    const newProduct = await productManager.addProducts(product);
    if (typeof newProduct === "string") throw Error(newProduct);
    resp.status(201).json({ response: newProduct });
  } catch (error) {
    resp.status(404).json({ error: error.message });
  }
};

const updateProducts = async (req, resp) => {
  try {
    const { pid } = req.params;
    const product = req.query;
    const updateProduct = await productManager.updateProduct(
      parseInt(pid),
      product
    );
    resp.status(201).json({ response: updateProduct });
  } catch (error) {
    resp.status(404).json({ error: error.message });
  }
};

const deleteProducts = async (req, resp) => {
  try {
    const { pid } = req.params;
    const resultadoEliminado = await productManager.deleteProduct(
      parseInt(pid)
    );
    if (typeof resultadoEliminado === "object") {
      resp
        .status(201)
        .json({ response: `Producto Eliminado con el ID: ${pid}` });
    } else {
      throw new Error(resultadoEliminado);
    }
  } catch (error) {
    resp.status(404).json({ error: error.message });
  }
};

router.get("/", getProduct);
router.get("/:pid", getByID);
router.post("/", addProduct);
router.put("/:pid", updateProducts);
router.delete("/:pid", deleteProducts);

export default router;
