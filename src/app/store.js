import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";
import authReducer from "../features/auth/authSlice";
import loanReducer from "../features/loans/loansSlice";
import displayReducer from "../features/display/displaySlice";
// const logger = require("redux-logger").createLogger();

const store = configureStore({
   reducer: {
      cake: cakeReducer,
      icecream: icecreamReducer,
      auth: authReducer,
      user: userReducer,
      loan: loanReducer,
      display: displayReducer,
   },
   //  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
