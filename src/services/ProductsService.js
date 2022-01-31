import axios from "axios"
const user = JSON.parse(localStorage.getItem("user"));


export const fetchProductList = async()=>{
    const{data}=await axios.get('http://localhost:8080/api/products/getAll')
    return data;
}

export const fetchProductDetail = async(id)=>{
    const{data}=await axios.get(`http://localhost:8080/api/products/getByProductId?id=${id}`)
    return data;
}

export const fetchProductImages = async(id)=>{
    const{data}=await axios.get(`http://localhost:8080/api/productImages/getById?productId=${id}`)
    return data;
}

export const deleteProduct=async(id)=>{
    const {data}=await fetch(`http://localhost:8080/api/products/deleteById?id=${id}`)
    return data;
};


export const postProduct=async(input)=>{
    const {data} =await fetch(`http://localhost:8080/api/products/add`,{
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      Authorization: "Bearer " + user.accessToken,
      "Content-Type": "application/json",
    },
  })
  .then((res) => res.json())
    .catch((err) => console.log(err));
    return data;
};

export const updateProduct =async(input)=>{

    console.log(input)

    const {data} =await fetch(`http://localhost:8080/api/products/update`, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          Authorization: "Bearer " + user.accessToken,
          "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
    return data;    
}
