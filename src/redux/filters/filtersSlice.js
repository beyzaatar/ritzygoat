import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getSizesAsync=createAsyncThunk('sizeFilters/getSizesAsync',async()=>{
    const res=await axios('http://localhost:8080/api/sizes/getAll');
    return res.data.data;
})

export const getDesignersAsync=createAsyncThunk('designerFilters/getDesignersAsync',async()=>{
    const res=await axios('http://localhost:8080/api/designers/getAll');
    return res.data.data;
})

export const getColorsAsync=createAsyncThunk('colorFilters/getColorsAsync',async()=>{
    const res=await axios('http://localhost:8080/api/colors/getAll');
    return res.data.data;
})

export const getGendersAsync=createAsyncThunk('genderFilters/getGendersAsync',async()=>{
    const res=await axios("http://localhost:8080/api/genders/getAll");
    return res.data.data;
})

export const getMaterialsAsync=createAsyncThunk('materialFilters/getMaterialsAsync',async()=>{
    const res=await axios("http://localhost:8080/api/materials/getAll");
    return res.data.data;
})

export const filtersSlice=createSlice({
    name:'filters',
    initialState:{
        sizes:[],
        designers:[],
        colors:[],
        genders:[],
        materials:[],
        isLoadingSize:false,
        errorSize:false,
        currentSize:0,
        isLoadingDesigner:false,
        errorDesigner:false,
        isLoadingColor:false,
        errorColor:false,
        isLoadingGender:false,
        errorColorGender:false,
    },
    reducers:{
        changeCurrentSize: (state, action) => {
            
            console.log(action.payload)

          }
    },
    extraReducers:{
        [getSizesAsync.pending]:(state,action)=>{
            state.isLoadingSize=true;
        },
        [getSizesAsync.fulfilled]:(state, action) => {
            state.sizes=action.payload;
            state.isLoadingSize=false;
        },
        [getSizesAsync.rejected]:(state, action)=>{
            state.isLoadingSize=false;
            state.console.errorSize=action.error.message;

        },

        [getDesignersAsync.pending]:(state,action)=>{
            state.isLoadingDesigner=true;
        },
        [getDesignersAsync.fulfilled]:(state, action) => {
            state.designers=action.payload;
            state.isLoadingDesigner=false;
        },
        [getDesignersAsync.rejected]:(state, action)=>{
            state.isLoadingDesigner=false;
            state.console.errorDesigner=action.error.message;

        },

        [getColorsAsync.pending]:(state,action)=>{
            state.isLoadingColor=true;
        },
        [getColorsAsync.fulfilled]:(state, action) => {
            state.colors=action.payload;
            state.isLoadingColor=false;
        },
        [getColorsAsync.rejected]:(state, action)=>{
            state.isLoadingColor=false;
            state.console.errorColor=action.error.message;
        },

        [getMaterialsAsync.pending]:(state,action)=>{
            state.isLoadingMaterial=true;
        },
        [getMaterialsAsync.fulfilled]:(state, action) => {
            state.materials=action.payload;
            state.isLoadingMaterial=false;
        },
        [getMaterialsAsync.rejected]:(state, action)=>{
            state.isLoadingMaterial=false;
            state.console.errorMaterial=action.error.message;
        },

        [getGendersAsync.pending]:(state,action)=>{
            state.isLoadingGender=true;
        },
        [getGendersAsync.fulfilled]:(state, action) => {
            state.genders=action.payload;
            state.isLoadingGender=false;
        },
        [getGendersAsync.rejected]:(state, action)=>{
            state.isLoadingGender=false;
            state.console.errorGender=action.error.message;
        }
    }
})
export const { changeCurrentSize } = filtersSlice.actions;

export default filtersSlice.reducer;