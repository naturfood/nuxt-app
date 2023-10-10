import { useFetch } from "nuxt/app"


export default defineEventHandler((event) => {   
    return  useFetch('https://fakestoreapi.com/products')
  })