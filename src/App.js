import { useMemo } from "react";

import BasicGrid from "./components/layouts/GridLayout";
import MuiAppBar from "./components/layouts/Navbar";
import Checkbox from "@mui/material/Checkbox";
import { blue, green, orange, purple } from "@mui/material/colors";
import BaseLayout from "./components/layouts/BaseLayout";
import {
	createTheme,
	ThemeProvider,
	styled,
	responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { getDesignTokens } from "./components/pages/themes/Theme";

function App() {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	console.log({ prefersDarkMode });
	const darkThemeDefault = useMemo(
		() =>
			responsiveFontSizes(
				createTheme({
					Button: {
						background:
							"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
					},
					components: {
						MuiButton: {
							styleOverrides: {
								contained: {
									// background:
									// 	"linear-gradient(45deg, #388CD8 30%, #7855FF 90%)",
									// background:
									// 	"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
									// boxShadow:
									// 	"0 3px 5px 2px rgba(33, 203, 243, .3)",
									border: 0,
									// borderRadius: 30,
									// boxShadow:
									// 	"0 3px 5px 2px rgba(255, 105, 135, .3)",
									color: "white",
									// height: 48,
									// padding: "0 30px",
								},
							},
						},
					},
					palette: prefersDarkMode
						? {
								mode: "dark",
								background: {
									default: "#1E1E2E", // "#15202B",
									paper: "#27293C", // "#172430",
									// paper: "#192834",
									// paper: "#1C2731",
									sideBar: {
										main: "#B63E82",
									},
								},
								primary: {
									main: "#388CD8",
								},
								secondary: {
									main: "#B63E82",
								},
								// newCustomColors
								sideBar: {
									main: "#253152",
								},
						  }
						: {
								mode: "light",
								background: {
									default: "#F5F6FA", // "#F9FAFC", //  "#1E1E2E", // "#15202B",
									// paper: "#27293C", // "#172430",
									// paper: "#192834",
									// paper: "#1C2731",
									sideBar: {
										main: "#253152",
									},
								},
								primary: {
									main: "#388CD8",
								},
								secondary: {
									main: "#B63E82",
								},
								// newCustomColors
								sideBar: {
									main: "#111827",
								},
						  },
					shape: {
						// borderRadius: "20px",
					},
					status: {
						danger: orange[500],
					},
				})
			),
		[prefersDarkMode]
	);
	console.log(purple);
	return (
		<ThemeProvider theme={darkThemeDefault}>
			<MuiAppBar />
			<BaseLayout />
			<CssBaseline />
		</ThemeProvider>
	);
}

export default App;
