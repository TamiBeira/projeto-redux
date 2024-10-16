import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: 1,
        name: "Tamiris Beira",
        email: "tamiris@teste.com",
        address: null,
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action) => {
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    address: {
                        location: "Rua Zeferino Pires Barbosa",
                        number: 200,
                    },
                },
            };
        },
    },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
