import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

const initialState:Statetype={
    loading:false,
    anime:[],
    error:""
}

const Animeslice=createSlice({
    name:"anime",
    initialState:initialState,
    reducers:{
        fetchstarted:(state)=>{
            state.loading=true
        },
        fetchworked:(state,action:PayloadAction<Animetype[]>)=>{
            state.loading=false,
            state.anime=action.payload
        },
        fetchfailed:(state,action:PayloadAction<string>)=>{
            state.loading=false,
            state.error=action.payload
        }
    }
})

export const {fetchfailed,fetchstarted,fetchworked}=Animeslice.actions;

export const Animereducer=Animeslice.reducer;