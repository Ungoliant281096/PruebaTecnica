import axios from "./axios";

// Solicita todos los productos
export const getProductsRequest = async () => axios.get("/products");

// Crea un nuevo producto
export const createProductRequest = async (product) => axios.post("/products", product);

// Actualiza un producto existente, usando el ID del producto
export const updateProductRequest = async (id, product) =>
  axios.put(`/products/${id}`, product);

// Elimina un producto existente usando el ID del producto
export const deleteProductRequest = async (id) => axios.delete(`/products/${id}`);

// Obtiene un producto específico usando el ID del producto
export const getProductRequest = async (id) => axios.get(`/products/${id}`);
