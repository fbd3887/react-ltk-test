import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom"
import { SnackbarProvider } from "notistack";
import Home from "./Home";
import store from "./store/configureStore";


export default function App() {
  return (
    <Provider store={store}>
			<SnackbarProvider>
				<Router>
					<Home />
				</Router>
			</SnackbarProvider>
    </Provider>
  );
}
