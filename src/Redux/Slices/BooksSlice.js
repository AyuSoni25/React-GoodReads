import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    bookList: []
};

export const getAllBooks = createAsyncThunk("books/getAllBooks", async () => {
    try {
        const response = axiosInstance.get("books");
        toast.promise(response, {
            loading: "Getting all books.",
            success: "Successfully fetched all books.",
            error: "Something went wrong",
        });
        return await response;
    } catch (error) {
        if (error?.response?.data?.err){
            toast.error(error?.response?.data?.err);
        } else {
            toast.error("Cannot fetch all books, something went wrong");
        }
    }
});

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllBooks.fulfilled, (state, action)=>{
            if(action?.payload?.data?.data){
                state.bookList = action?.payload?.data?.data;
            }
        });
    }
});

export default booksSlice.reducer;