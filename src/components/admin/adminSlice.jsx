import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

let initialState = {
    value:[],
    loading:false,
    rejected:"",

}

const allUrl = "http://localhost:3002/bgPosts"

export const getPosts = createAsyncThunk("post/getPosts", async ({url}, thunkAPI) => {
    try {
        let res = await axios.get(url)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const addAllPost = createAsyncThunk("post/addPost", async ({title, post, url} ,thunkAPI)=> {
    try {
        
        let res = await axios.post(url,{
            title:title,
            data:post
        })
        if(url !== "http://localhost:3002/bgPosts"){
            await axios.post(allUrl,{
                title:title,
                data:post
            })                
        }
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const delPosts = createAsyncThunk("post/delPosts", async ({url} ,thunkAPI)=> {
    try {
        let del = await axios.get(url)
        del.data.map(({id}) => {
            axios.delete(`${url}/${id}`)
        })
        console.log(del.data);
        
        let res = await axios.get(url)
        console.log(res);
        
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


export const adminSlice = createSlice({
    name:"post",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false
                state.value = action.payload
            })
            .addCase(addAllPost.fulfilled, (state, action) => {
                state.value.push(action.payload)
            })
            .addCase(delPosts.fulfilled, (state, action) => {
                console.log(state.value = action.payload);
                
                state.value = action.payload
            })
    }
});

export const selectPost = (state) => state.posts.value;
export default adminSlice.reducer
