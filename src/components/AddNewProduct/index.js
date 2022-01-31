import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from 'react-query'
import { postProduct } from "../../services/ProductsService"
import { Text, Box, FormControl, FormLabel, Input, Textarea, Button, Select } from "@chakra-ui/react"
import { Formik } from "formik"
import { getGendersAsync } from "../../redux/filters/filtersSlice";
import { getMaterialsAsync } from "../../redux/filters/filtersSlice"
import { getSizesAsync } from "../../redux/filters/filtersSlice";
import { getColorsAsync } from "../../redux/filters/filtersSlice"
import { useSelector, useDispatch } from "react-redux";

function AddNewProduct() {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));


    const [category1Id, setCategory1Id] = useState(0);
    const [category2Id, setCategory2Id] = useState(0);
    const [colorId, setColorId] = useState(0);
    const [genderId, setGenderId] = useState(0);
    const [materialId, setMaterialId] = useState(0);
    const [sizeId, setSizeId] = useState(0);
    const [productName, setProductName] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [description, setDescription] = useState("");
    const [detailedInformation, setDetailedInformation] = useState("");
    const [promotionalPrice, setPromotionalPrice] = useState("");

    const categories1 = useSelector((state) => state.categories.categories1);
    const categories2 = useSelector((state) => state.categories.categories2);
    const colors = useSelector((state) => state.filters.colors);
    const genders = useSelector((state) => state.filters.genders);
    const materials = useSelector((state) => state.filters.materials);
    const sizes = useSelector((state) => state.filters.sizes);


    useEffect(() => {
        dispatch(getColorsAsync());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getGendersAsync());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getMaterialsAsync());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getSizesAsync());
    }, [dispatch]);

    const handleSubmitForm = async () => {
        const input = {
            categoryLevel1: {
                id: Number(category1Id),
                categoryName: category1Id.categoryName
            },
            categoryLevel2: {
                id: Number(category2Id),
            },

           
            user: {
                id: Number(user.id),
            },
            color: {
                id: Number(colorId),
            },
            gender: {
                id: Number(genderId),
            },
            size: {
                id: Number(sizeId),
            },
            material: {
                id: Number(materialId),
            },
            productName: productName,
            unitPrice: unitPrice,
            description: description,
            detailedInformation: detailedInformation,
            promotionalPrice: promotionalPrice
        };

        await postProduct(input);
    };
    return (

        <div className=" mt-5 row justify-content-center">
            <div className="h4 row justify-content-center">ADD NEW PRODUCT</div>
            <form className="w-50">
                <FormControl>
                    <FormLabel>Product Name</FormLabel>
                    <Input
                        placeholder="Please enter  product name"
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Category 1</FormLabel>
                    <Select
                        placeholder="Please select  category 1"
                        onChange={(e) => setCategory1Id(e.target.value)}
                        value={category1Id.categoryName}
                    >
                        {categories1.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.categoryName}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Category 2</FormLabel>
                    <Select
                        placeholder="Please select  category 2"
                        onChange={(e) => setCategory2Id(e.target.value)}
                    >
                        {categories2.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.categoryName}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                
                <FormControl>
                    <FormLabel>Color Name</FormLabel>
                    <Select
                        placeholder="Please select  color"
                        onChange={(e) => setColorId(e.target.value)}
                    >
                        {colors.map((color) => (
                            <option key={color.id} value={color.id}>
                                {color.colorName}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Gender Name</FormLabel>
                    <Select
                        placeholder="Please select  gender"
                        onChange={(e) => setGenderId(e.target.value)}
                    >
                        {genders.map((gender) => (
                            <option key={gender.id} value={gender.id}>
                                {gender.genderName}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Material Name</FormLabel>
                    <Select
                        placeholder="Please select  material"
                        onChange={(e) => setMaterialId(e.target.value)}
                    >
                        {materials.map((material) => (
                            <option key={material.id} value={material.id}>
                                {material.materialName}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Size Name</FormLabel>
                    <Select
                        placeholder="Please select  size"
                        onChange={(e) => setSizeId(e.target.value)}
                    >
                        {sizes.map((size) => (
                            <option key={size.id} value={size.id}>
                                {size.sizeName}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Unit Price</FormLabel>
                    <Input type={"number"}
                        placeholder="Please enter  unit price"
                        onChange={(e) => setUnitPrice(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Promotional Price</FormLabel>
                    <Input type={"number"}
                        placeholder="Please enter  promotional price"
                        onChange={(e) => setPromotionalPrice(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                        placeholder="Please enter  description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Detailed Information</FormLabel>
                    <Textarea
                        placeholder="Please enter  detailed information"
                        onChange={(e) => setDetailedInformation(e.target.value)}
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

export default AddNewProduct


