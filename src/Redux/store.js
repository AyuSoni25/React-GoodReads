import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from 'Redux/Slices/AuthSlice';
import booksSliceReducer from 'Redux/Slices/BooksSlice';

export default configureStore({
    reducer: {
        auth: authSliceReducer,
        books: booksSliceReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});