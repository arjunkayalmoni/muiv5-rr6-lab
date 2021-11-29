import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";


export const getDesignTokens = (mode) => ({
	palette: {
		mode,
		primary: {
			...amber,
			...(mode === "dark" && {
				main: amber[300],
			}),
		},
		...(mode === "dark" && {
			background: {
				default: deepOrange[900],
				paper: deepOrange[900],
			},
		}),
		text: {
			...(mode === "light"
				? {
						primary: grey[900],
						secondary: grey[800],
				  }
				: {
						primary: "#fff",
						secondary: grey[500],
				  }),
		},
	},
});

// const getDesignTokens = (mode) => ({
// 	palette: {
// 		mode,
// 		primary: {
// 			...amber,
// 			...(mode === "dark" && {
// 				main: amber[300],
// 			}),
// 		},
// 		...(mode === "dark" && {
// 			background: {
// 				default: deepOrange[900],
// 				paper: deepOrange[900],
// 			},
// 		}),
// 		text: {
//             ...(mode === "light"
//                 ? {
//                         primary: grey[900],
//                         secondary: grey[800],
//                     }
//                 : {
//                         primary: "#fff",
//                         secondary: grey[500],
//                     }),
// 		},
// 	},
// });

// {
// 					Button: {
// 						background:
// 							"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
// 					},
// 					components: {
// 						MuiButton: {
// 							styleOverrides: {
// 								contained: {
// 									// background:
// 									// 	"linear-gradient(45deg, #388CD8 30%, #7855FF 90%)",
// 									// background:
// 									// 	"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
// 									// boxShadow:
// 									// 	"0 3px 5px 2px rgba(33, 203, 243, .3)",
// 									border: 0,
// 									// borderRadius: 30,
// 									// boxShadow:
// 									// 	"0 3px 5px 2px rgba(255, 105, 135, .3)",
// 									color: "white",
// 									// height: 48,
// 									// padding: "0 30px",
// 								},
// 							},
// 						},
// 					},
// 					palette: {
// 						mode: prefersDarkMode ? "dark" : "light",
// 						background: {
// 							// default: "#1E1E2E", // "#15202B",
// 							// paper: "#27293C", // "#172430",
// 							// paper: "#192834",
// 							// paper: "#1C2731",
// 						},
// 						primary: {
// 							main: "#388CD8",
// 						},
// 						secondary: {
// 							main: "#B63E82",
// 						},
// 						// newCustomColors
// 						neutral: {
// 							main: "#F9FAFC",
// 						},
// 					},
// 					shape: {
// 						// borderRadius: "20px",
// 					},
// 					status: {
// 						danger: orange[500],
// 					},
// 				}