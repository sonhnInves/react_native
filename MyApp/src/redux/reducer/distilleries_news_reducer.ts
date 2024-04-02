import {createSlice} from "@reduxjs/toolkit";

interface initialState {
    isLoading: boolean;
    distilleriesNews: Partial<DistilleriesNews>;
}

const distilleriesSlice = createSlice({
    name: "distilleries_news",
    initialState: {
        isLoading: true,
        distilleriesNews: {}
    } satisfies initialState as initialState,
    reducers: {
        distilleriesNews: (state, action) => {
            state.isLoading = false;
            state.distilleriesNews = action.payload;
            console.log("Distilleries News",state.distilleriesNews)
        }
    }
})
export  const  {distilleriesNews} = distilleriesSlice.actions;
export default  distilleriesSlice.reducer
