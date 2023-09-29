import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers:{
        addUser : (state, action) => {
            console.log(action);
            state.push(action.payload)
        },
        updateUser : (state, action ) => {
            const {id, itemname} = action.payload;
            const updateUser = state.find(users => users.id == id);
            if(updateUser){
                updateUser.itemname = itemname;
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const deleteUser = state.find(users => users.id == id);
            if(deleteUser){
                return state.filter(f => f.id !== id);
            }
        }
    }
})


export const {addUser, updateUser, deleteUser} = userSlice.actions; 
export default userSlice.reducer;