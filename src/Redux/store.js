import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from 'Redux/Slices/AuthSlice';
import booksSliceReducer from 'Redux/Slices/BooksSlice';
import shelfSliceReducer from 'Redux/Slices/ShelfSlice';

export default configureStore({
    reducer: {
        auth: authSliceReducer,
        books: booksSliceReducer,
        shelf: shelfSliceReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});