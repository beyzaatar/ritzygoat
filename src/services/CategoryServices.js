import axios from "axios"
const user = JSON.parse(localStorage.getItem("user"));

export const fetchCategoryLevel1List = async()=>{
    const{data}=await axios.get('http://localhost:8080/api/categories/categoryLevel1/getAll')
    return data;
}

export const deleteCategoryLevel1=async(id)=>{
    const {data}=await fetch(`http://localhost:8080/api/categories/categoryLevel1/deleteById?id=${id}`)
    return data;
};

export const deleteCategoryLevel2=async(id)=>{
    const {data}=await fetch(`http://localhost:8080/api/categories/categoryLevel2/deleteById?id=${id}`)
    return data;
};

export const postCategoryLevel1=async(input)=>{
    const {data} =await fetch(`http://localhost:8080/api/categories/categoryLevel1/add`,{
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

export const postCategoryLevel2=async(input)=>{
    const {data} =await fetch(`http://localhost:8080/api/categories/categoryLevel2/add`,{
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
export default class CategoryServices{

    state={
        currentCategory:""
    }

    getCategoriesLevel1=()=>{
        return axios("http://localhost:8080/api/categoryLevel1/getAll")
    }

    getCategoriesLevel2=(seoUrl)=>{
        let url="http://localhost:8080/api/categoryLevel2"
        if(seoUrl){
            url+="/getByCategoryLevel1Id?id="+seoUrl
        }
        
        return axios(url)
    }

    changeCategory=(id)=>{
        this.state.currentCategory=id
        this.getCategoriesLevel2(this.state.currentCategory)
    }
}