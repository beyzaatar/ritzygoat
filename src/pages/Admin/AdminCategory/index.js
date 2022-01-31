import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts, getCategoryLevel1sAsync, getCategoryLevel2sAsync } from "../../../redux/categories/categoriesSlice"
import { deleteCategoryLevel1, deleteCategoryLevel2 } from '../../../services/CategoryServices';
import { useQueryClient, useMutation } from 'react-query';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Portal,
    useToast,
    Button
} from '@chakra-ui/react'

function AdminCategory() {
    const categories1 = useSelector((state) => state.categories.categories1)
    const categories2 = useSelector((state) => state.categories.categories2)

    const dispatch = useDispatch();
    const toast = useToast()

    useEffect(() => {
        dispatch(getCategoryLevel1sAsync());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCategoryLevel2sAsync());
    }, [dispatch]);

    const queryClient = useQueryClient();

    const deleteMutation1 = useMutation(deleteCategoryLevel1, {
        onSuccess: () => queryClient.invalidateQueries()
    });

    const deleteMutation2 = useMutation(deleteCategoryLevel2, {
        onSuccess: () => queryClient.invalidateQueries()
    });
    return (
        <div>
        <div className='container'>
            <div className="row justify-content-md-center mt-3 ">
                <a href='/newCategory1' className='btn btn-dark w-25  m-3' >Add New Category Level1</a>
                
                <a href='/newCategory2' className='btn btn-dark w-25  m-3' >Add New Category Level2</a>
                <table className="table table-striped table-hover mt-5">
                    <thead>
                        <tr>
                            <th scope="col" className='h5'>id</th>
                            <th scope="col" className='h5'>Category Level1 Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories1.map((categoryLevel1) => (
                                <tr key={categoryLevel1.id}>
                                    <th className='h5' scope="row">{categoryLevel1.id}</th>
                                    <td>{categoryLevel1.categoryName}</td>                       
                                    {/* <td><Link to={`/adminProductDetail/${product.id}`} type="button" className="btn btn-link text-success">Edit</Link></td>

                                    <td> */}
                                        <Popover>
                                            <PopoverTrigger>
                                                <button type="button" className="btn btn-link text-success">Delete</button>
                                            </PopoverTrigger>
                                            <Portal size>
                                                <PopoverContent>
                                                    <PopoverArrow />
                                                    <PopoverHeader className='h5'>Are you sure?</PopoverHeader>
                                                    <PopoverCloseButton />
                                                    <PopoverBody>
                                                        <button type="button" className="btn btn-dark w-25" onClick={() => {
                                                            deleteMutation1.mutate(categoryLevel1.id, {
                                                                onSuccess: () => {
                                                                    console.log(categoryLevel1.id)
                                                                }

                                                            })
                                                        }}
                                                        >Yes</button>

                                                        <button type="button" style={{ marginLeft: 20 }} className="btn btn-light w-25">No</button>
                                                    </PopoverBody>
                                                    <PopoverFooter></PopoverFooter>
                                                </PopoverContent>
                                            </Portal>
                                        </Popover>
                                    
                                </tr>
                            ))}
                    </tbody>
                </table>
                <br></br>

                <table className="table table-striped table-hover mt-5">
                    <thead>
                        <tr>
                            <th scope="col" className='h5'>id</th>
                            <th scope="col" className='h5'>Category Level1 Name</th>
                            <th scope="col" className='h5'>Category Level2 Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories2.map((categoryLevel2) => (
                                <tr key={categoryLevel2.id}>
                                    <th className='h5' scope="row">{categoryLevel2.id}</th>
                                    <td>{categoryLevel2.categoryLevel1.categoryName}</td> 
                                    <td>{categoryLevel2.categoryName}</td>                       
                                    {/* <td><Link to={`/adminProductDetail/${product.id}`} type="button" className="btn btn-link text-success">Edit</Link></td>

                                    <td> */}
                                        <Popover>
                                            <PopoverTrigger>
                                                <button type="button" className="btn btn-link text-success">Delete</button>
                                            </PopoverTrigger>
                                            <Portal size>
                                                <PopoverContent>
                                                    <PopoverArrow />
                                                    <PopoverHeader className='h5'>Are you sure?</PopoverHeader>
                                                    <PopoverCloseButton />
                                                    <PopoverBody>
                                                        <button type="button" className="btn btn-dark w-25" onClick={() => {
                                                            deleteMutation2.mutate(categoryLevel2.id, {
                                                                onSuccess: () => {
                                                                    console.log(categoryLevel2.id)
                                                                }

                                                            })
                                                        }}
                                                        >Yes</button>

                                                        <button type="button" style={{ marginLeft: 20 }} className="btn btn-light w-25">No</button>
                                                    </PopoverBody>
                                                    <PopoverFooter></PopoverFooter>
                                                </PopoverContent>
                                            </Portal>
                                        </Popover>
                                    
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default AdminCategory
