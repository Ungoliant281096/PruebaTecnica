import { createContext, useContext, useState } from "react";
import {
  createProductRequest,
  deleteProductRequest,
  getProductsRequest,
  getProductRequest,
  updateProductRequest,
} from "../api/products";

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProducts must be used within a ProductProvider");
  return context;
};

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await getProductsRequest();
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await deleteProductRequest(id);
      if (res.status === 204) {
        setProducts(products.filter((product) => product._id !== id));
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const createProduct = async (product) => {
    try {
      const res = await createProductRequest(product);
      setProducts([...products, res.data]); // Actualiza el estado con el nuevo producto
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  const getProduct = async (id) => {
    try {
      const res = await getProductRequest(id);
      return res.data;
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  };

const updateProduct = async (id, product) => {
  try {
    // Llama a la función con el ID y el objeto de producto
    const res = await updateProductRequest(id, product);
    setProducts(products.map((p) => (p._id === id ? res.data : p)));
  } catch (error) {
    console.error("Failed to update product:", error);
  }
};


  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        deleteProduct,
        createProduct,
        getProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
