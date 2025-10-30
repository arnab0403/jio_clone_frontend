import { createSlice } from '@reduxjs/toolkit'

const initialState={
    isLoggedIn:false,
    user:null
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedInDetails: (state,action) => {
      state.isLoggedIn=true,
      state.user=action.payload
    },
    userLoggedOutDetails: (state) => {
      state.isLoggedIn=false,
      state.user=null
    },
    updateUserPremiumDetails:(state,action)=>{
      state.user.isPremium=action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { userLoggedInDetails, userLoggedOutDetails,updateUserPremiumDetails } = userSlice.actions

export default userSlice.reducer;