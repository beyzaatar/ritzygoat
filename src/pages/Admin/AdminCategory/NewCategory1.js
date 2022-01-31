import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from 'react-query'
import { postCategoryLevel2 } from "../../../services/CategoryServices"
import { postCategoryLevel1 } from "../../../services/CategoryServices"
import { Text, Box, FormControl, FormLabel, Input, Textarea, Button, Select } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux";

function NewCategory1() {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));


    const [categoryName, setcategoryName] = useState(0);

    const categories1 = useSelector((state) => state.categories.categories1);

    const handleSubmitForm = async () => {
        const input = {
            categoryName:categoryName,      
            user: {
                id: Number(user.id),
            },
        };
        await postCategoryLevel1(input);
    }
    return (
        <div className=" mt-5 row justify-content-center">
            <div className="h4 row justify-content-center">ADD NEW CATEGORIES</div>
            <form className="w-50">
                <FormControl>
                    <FormLabel>Category 1</FormLabel>
                    <Input 
                        placeholder="Please enter category 1"
                        onChange={(e) => setcategoryName(e.target.value)}
                    />                   
                </FormControl>
                
                <FormControl mt={"4"}>
                    <button type="button" onClick={handleSubmitForm} className="btn btn-dark w-100 mb-5 mt-3">
                        SAVE
                        
                    </button>
                </FormControl>
            </form>
        </div>
    )

}
export default NewCategory1
