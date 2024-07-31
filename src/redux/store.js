import {configureStore} from "@reduxjs/toolkit"
import todolistSlice from "./todolistSlice"
const store=configureStore({
    reducer:{
        students:todolistSlice
}
})

export default store
