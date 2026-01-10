import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

// 1. Fetch Cart
export const fetchCartDB = createAsyncThunk("cart/fetchCartDB", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get("/user/cart");
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

// 2. Add / Increase (Generic Add)
export const addToCartDB = createAsyncThunk("cart/addToCartDB", async (item, { rejectWithValue }) => {
  try {
    const pId = item.id || item.product_id;
    await api.post("/user/cart/add", { product_id: pId, quantity: 1 });
    return { ...item, product_id: pId };
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

// 3. Update Quantity (Specific for Cart Page)
export const updateQuantityDB = createAsyncThunk(
  "cart/updateQuantityDB",
  async ({ productId, action }, { rejectWithValue }) => {
    try {
      console.log("Prod id", productId);
      const response = await api.post(`/user/cart/update-quantity?product_id=${productId}&action=${action}`);
      return { productId, action, res: response.data };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// 4. Remove Item
export const removeFromCartDB = createAsyncThunk("cart/removeFromCartDB", async (productId, { rejectWithValue }) => {
  try {
    console.log("Product id to delete :", productId);
    await api.delete(`/user/cart/remove/${productId}`);
    return productId;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], status: "idle" },
  reducers: {
    clearCart: (state) => { state.items = []; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartDB.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToCartDB.fulfilled, (state, action) => {
        const pId = action.payload.product_id;
        const existing = state.items.find(i => i.product_id === pId);
        if (existing) { existing.quantity += 1; } 
        else { state.items.push({ ...action.payload, quantity: 1 }); }
      })
      .addCase(updateQuantityDB.fulfilled, (state, action) => {
        const { productId, action: type, res } = action.payload;
        if (res.action === "deleted") {
          state.items = state.items.filter(i => i.product_id !== productId);
        } else {
          const item = state.items.find(i => i.product_id === productId);
          if (item) {
            item.quantity = (type === "increase") ? item.quantity + 1 : item.quantity - 1;
          }
        }
      })
      .addCase(removeFromCartDB.fulfilled, (state, action) => {
        state.items = state.items.filter(i => i.product_id !== action.payload);
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;