import BasicGrid from "./components/layouts/GridLayout";
import MuiAppBar from "./components/layouts/Navbar";
import Checkbox from '@mui/material/Checkbox';
import { blue, green, orange, purple } from '@mui/material/colors';
import BaseLayout from "./components/layouts/BaseLayout";
import {
	createTheme,
	ThemeProvider,
	styled,
	responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import React from "react";


// const darkTheme = createTheme({
// 	palette: {
// 		mode: "dark",
// 	},
// });

// const theme = createTheme({
// 	shape: {
// 		borderRadius: "20px",
// 	},
// 	status: {
// 		danger: orange[500],
// 	},
// 	palette: {
// 		primary: {
// 			main: "#388CD8",
// 		},
// 		secondary: {
// 			main: "#B63E82",
// 		},
// 	},
// });

function App()
{
   const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
   const darkThemeDefault = React.useMemo(
		() =>
			responsiveFontSizes(
				createTheme({
					components: {
						MuiButton: {
							styleOverrides: {
								contained: {
									// background:
									// 	"linear-gradient(45deg, #388CD8 30%, #7855FF 90%)",
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
					palette: {
						mode: prefersDarkMode ? "dark" : "light",
						background: {
							default: "#15202B",
							paper: "#172430",
							// paper: "#192834",
							// paper: "#1C2731",
						},
						primary: {
							main: "#388CD8",
						},
						secondary: {
							main: "#B63E82",
						},
					},
					shape: {
						borderRadius: "20px",
					},
					status: {
						danger: orange[500],
					},
				})
			),
		[prefersDarkMode]
   );
  return (
		<ThemeProvider theme={darkThemeDefault}>
			<MuiAppBar />
			<br />
			<br />
      <br />
			<BaseLayout />
			<CssBaseline />
		</ThemeProvider>
  );
}

export default App;
