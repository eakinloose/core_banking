import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";
import authReducer from "../features/auth/authSlice";
// const logger = require("redux-logger").createLogger();

const store = configureStore({
   reducer: {
      cake: cakeReducer,
      icecream: icecreamReducer,
      auth: authReducer,
      user: userReducer,
   },
   //  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
