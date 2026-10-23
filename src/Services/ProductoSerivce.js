const API_URL = "https://devsapihub.com/api-ecommerce";


export async function ObtenerProductos(){
    const response = await fetch(API_URL,
        {
            method : "GET"
        }
    )

    const resultado = await response.json();

    return resultado


}