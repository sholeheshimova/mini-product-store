import instance from "./axiosInstance";


export async function getProducts() {
    const response = await instance.get("/products")

    return response.data
}


export async function getProductsById(id) {
    const response = await instance.get(`/products/${id}`)

    return response.data
}