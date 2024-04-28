import { Router } from "express";
import CartManager from "../managers/CartManager.js";

const router = Router();

const createCART = async (req, resp) => {
  try {
    const newCart = await CartManager.createCarts();
    resp.status(201).json({ response: newCart });
  } catch (error) {
    resp.status(404).json({ response: "No se puede crear el CART" });
  }
};

const obtainCARTS = async (req, resp) => {
  try {
    const carts = await CartManager.getCarts();
    if (carts.length > 0) {
      resp.status(200).json({ response: carts });
    } else {
      throw new Error(carts);
    }
  } catch (error) {
    resp.status(200).json({ error: "No existe ningun CART" });
  }
};

const obtainCARTByID = async (req, resp) => {
  try {
    const { cid } = req.params;
    const cart_products = await CartManager.getCartsByID(parseInt(cid));
    if (typeof cart_products !== "string" || cart_products.length > 0) {
      resp.status(200).json({ response: cart_products });
    } else {
      throw new Error(cart_products);
    }
  } catch (error) {
    resp.status(404).json({ error: error.message });
  }
};

const add_Products_To_Carts = async (req, resp) => {
  try {
    const { cid, pid } = req.params;
    const newProductInCart = await CartManager.addProducts_To_Carts(
      parseInt(cid),
      parseInt(pid)
    );
    resp.status(201).json({ response: newProductInCart });
  } catch (error) {
    resp.status(404).json({ error: error.message });
  }
};

router.post("/", createCART);
router.get("/", obtainCARTS);
router.get("/:cid", obtainCARTByID);
router.post("/:cid/carts/:pid", add_Products_To_Carts);

export default router;
