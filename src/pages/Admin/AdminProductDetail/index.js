import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { getColorsAsync } from "../../../redux/filters/filtersSlice"
import { fetchProductDetail, updateProduct } from "../../../services/ProductsService"
import { Text, Box, FormControl, FormLabel, Input, Textarea, Button, Select } from "@chakra-ui/react"
import { Formik } from "formik"
import { getGendersAsync } from "../../../redux/filters/filtersSlice";
import {getMaterialsAsync} from "../../../redux/filters/filtersSlice"
import { getSizesAsync } from "../../../redux/filters/filtersSlice";

function AdminProductDetail() {

    const dispatch = useDispatch();

    const [productName, setProductName] = useState("");
    const [category1Id, setCategory1Id] = useState("");
    const [category2Id, setCategory2Id] = useState("");
    const [colorId, setColorId] = useState("");
    const [genderId, setGenderId] = useState("");
    const [materialId, setMaterialId] = useState("");
    const [sizeId, setSizeId] = useState("");
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

    const { id } = useParams();
    const { isLoading, error, data } = useQuery(["productDetail", id], () => fetchProductDetail(id))
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const handleSubmit = async() => {
        console.log("submitted");
        
        const input = {
            id:id,
            categoryLevel1: {
                id: Number(category1Id),
                categoryName: category1Id.categoryName
            },
            categoryLevel2: {
                id: Number(category2Id),
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

       
    await updateProduct(input);
    console.log(category1Id)
    };
    return (
        <div className='container'>
            <Text fontSize={"2xl"}>Edit</Text>
            <Formik
                initialValues={{
                    id:data.data.id,
                    productName: data.data.productName,
                    categoryLevel1: data.data.categoryLevel1.categoryName,
                    categoryLevel2: data.data.categoryLevel2.categoryName,
                    colorId: data.data.color.colorName,
                    genderId: data.data.gender.genderName,
                    materialId: data.data.material.materialName,
                    sizeId: data.data.size.sizeName,
                    unitPrice: data.data.unitPrice,
                    promotionalPrice: data.data.promotionalPrice,
                    description: data.data.description,
                    detailedInformation: data.data.detailedInformation
                }}
                onSubmit={handleSubmit}
            >
                {
                    ({ handleSubmit,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        values,
                        isSubmitting }) =>
                        <>
                            <Box>
                                <Box my={"5"} textAlign={"left"}>
                                    <form onSubmit={handleSubmit}>
                                        <FormControl>
                                            <FormLabel>Product Name</FormLabel>                                       
                                            <Input
                                                onChange={(e) => setProductName(e.target.value)}
                                                placeholder={values.productName}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Category 1</FormLabel>
                                            <Select 
                                            onChange={(e) => setCategory1Id(e.target.value)}
                                            placeholder={values.categoryLevel1}
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
                                            onChange={(e) => setCategory2Id(e.target.value)}
                                            placeholder={values.categoryLevel2}
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
                                            onChange={(e) => setColorId(e.target.value)}
                                            placeholder={values.colorId}
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
                                            onChange={(e) => setGenderId(e.target.value)}
                                            placeholder={values.genderId}
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
                                            onChange={(e) => setMaterialId(e.target.value)}
                                            placeholder={values.materialId}
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
                                            onChange={(e) => setSizeId(e.target.value)}
                                            placeholder={values.sizeId}
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
                                                onChange={(e) => setUnitPrice(e.target.value)}
                                                placeholder={values.unitPrice}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Promotional Price</FormLabel>
                                            <Input type={"number"}
                                                onChange={(e) => setPromotionalPrice(e.target.value)}
                                                placeholder={values.promotionalPrice}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Description</FormLabel>
                                            <Textarea
                                                onChange={(e) => setDescription(e.target.value)}
                                                placeholder={values.description}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Detailed Information</FormLabel>
                                            <Textarea
                                                onChange={(e) => setDetailedInformation(e.target.value)}
                                                placeholder={values.detailedInformation}
                                            />
                                        </FormControl>
                                        <FormControl mt={"4"}>
                                            <Button className='w-100 '

                                                type='submit'
                                                isLoading={isSubmitting}
                                            >
                                                Update

                                            </Button>
                                        </FormControl>
                                    </form>
                                </Box>
                            </Box>

                        </>

                }

            </Formik>


        </div>
    )
}

export default AdminProductDetail
