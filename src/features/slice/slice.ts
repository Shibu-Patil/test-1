import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/user";
import apiClient from "../../api/apiClient";
import toast from "react-hot-toast";

// const API_URL = "http://localhost:3000/users";





interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};



// READ
export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const res = await apiClient.get<User[]>("/users");
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// CREATE
export const createUser = createAsyncThunk<User, User>(
  "users/createUser",
  async (userData, thunkAPI) => {
    try {
      const res = await apiClient.post<User>("/users", userData);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// UPDATE
export const updateUser = createAsyncThunk<
  User,
  { id: string; data: User }
>(
  "users/updateUser",
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await apiClient.put<User>(`/users/${id}`, data);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// DELETE
export const deleteUser = createAsyncThunk<string, string>(
  "users/deleteUser",
  async (id, thunkAPI) => {
    try {
      await apiClient.delete(`/users/${id}`);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// Slice


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder

      // FETCH
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // CREATE
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.users.push(action.payload);
        toast.success("User Created Successfully")
      }).addCase(createUser.pending, (state) => {
        state.loading = true;

      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("something went wrong")

      })
      // UPDATE
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        const index = state.users.findIndex(
          (u) => u.id === action.payload.id

        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
        toast.success("User Updated Successfully")
        state.loading = false;

      }).addCase(updateUser.pending, (state) => {
        state.loading = true;

      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("something went wrong")
      })

      // DELETE
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.users = state.users.filter(
          (u) => u.id !== action.payload
        );
      }).addCase(deleteUser.pending, (state) => {
        state.loading = true;
      }) .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  }
});

export default userSlice.reducer;
