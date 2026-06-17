import { createSlice } from "@reduxjs/toolkit";

const loanSlice = createSlice({
  name: "loan",

  initialState: {
    loans: [],
  },

  reducers: {
    addLoan: (state, action) => {
      state.loans.push({
        ...action.payload,
        status: "Pending",
      });
    },

    approveLoan: (state, action) => {
      state.loans[action.payload].status = "Approved";
    },

    rejectLoan: (state, action) => {
      state.loans[action.payload].status = "Rejected";
    },
  },
});

export const {
  addLoan,
  approveLoan,
  rejectLoan,
} = loanSlice.actions;

export default loanSlice.reducer;