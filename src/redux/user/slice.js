import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: 1,
        name: null,
        email: null,
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
                    address: null,
                },
            };
        },
        addAddress: (state, action) => {
            if (
                action.payload.location === "" ||
                action.payload.number === ""
            ) {
                alert(`Preencha todos os campos!`);
                return { ...state };
            }
            if (state.user === null) {
                alert(`Faça Login para cadastrar endereço.`);
                return { ...state };
            }
            alert(`Dados atualizados!`);
            return {
                ...state,
                user: {
                    ...state.user,
                    address: {
                        location: action.payload.location,
                        number: action.payload.number,
                    },
                },
            };
        },
        deleteAddress: (state) => {
            return {
                user: {
                    ...state.user,
                    address: null,
                },
            };
        },
        logoutUser: (state) => {
            return {
                ...state,
                user: null,
            };
        },
    },
});

export const { createUser, addAddress, deleteAddress, logoutUser } =
    userSlice.actions;
export default userSlice.reducer;
