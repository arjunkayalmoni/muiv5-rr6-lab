import * as React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Dashboard } from "../pages/Dashboard";
import { About } from "../pages/About";
import { Profile } from "../pages/Profile";
import { ErrorPage } from "../pages/ErrorPage";
import { spacing } from "@mui/material/node_modules/@mui/system";
import { Stats } from "../pages/Stats";
import { Contact } from "../pages/Contact";
import { palette } from "@mui/system";
import { purple } from "@mui/material/colors";



const SideBar = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	color: "#fff",
	// background: theme.palette.background.sideBar.main,
	background: "linear-gradient(0deg, #0098f0 0%, #0ecea8 100%)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	height: "91vh",
	position: "fixed",
	padding: 100,
	width: "15.5%", // theme.spacing(25)
	// fontSize: "1.5em",
	textDecoration: "none",
}));

const links = {
	listStyle: 'none',
	linkStyle: 'none',
	// fontSize: '1.5em'
}

const activeStyle = {
	border: '2px solid cyan',
	padding: "10px",
	textDecoration: "none"
}

const boxStyle = { m: 2 }

const navLinks = [
	{ name: "Dashboard", url: "/", element: <Dashboard /> },
	{ name: "Stats", url: "stats", element: <Stats /> },
	{ name: "Contact", url: "contact", element: <Contact /> },
	{ name: "About", url: "about", element: <About /> },
];


const BaseLayout = () => {
	return (
		<Router>
			<Box sx={{ ...boxStyle }}>
				<Grid container spacing={1}>
					<Grid item xs={2}>
						<SideBar className="sideBarGreen">
							{navLinks.map((link) => (
								<NavLink
									component={<Button />}
									// variant={({ isActive }) =>
									// 	isActive ? "outlined" : "link"
									// }

									// style={({ isActive }) =>
									// 	isActive ? activeStyle : undefined
									// }
									to={link.url}
									key={link.name}
								>
									{link.name}
								</NavLink>
							))}
							<Link
								component="button"
								variant="outlined"
								onClick={() => {
									console.info("I'm a button.");
								}}
							>
								Button Link
							</Link>
							{/* <NavLink
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
								to="/profile"
							>
								Profile
							</NavLink> */}
						</SideBar>
					</Grid>
					<Grid item xs={10}>
						<Routes>
							{navLinks.map((link) => (
								<Route
									path={link.url}
									element={link.element}
									key={link.name}
								/>
							))}
							{/* <Route path="/" element={<Dashboard />} />
							<Route path="about" element={<About />} />
							<Route path="about" element={<About />} />
							<Route path="about" element={<About />} /> */}

							<Route
								path="profile/:username"
								element={<Profile />}
							/>
							<Route path="*" element={<ErrorPage />} />
						</Routes>
					</Grid>
				</Grid>
			</Box>
		</Router>
	);
};

export default BaseLayout;



// const BaseLayout = () => {
// 	return (
// 		<Box sx={{ flexGrow: 1, mt: 2, ml: 1, mr: 1 }}>
// 			<Grid
// 				container
// 				columnSpacing={2}
// 				rowSpacing={0}
// 				columns={12}
// 				direction="row"
// 			>
// 				<Grid item xs={2}>
// 					<SideBar>xs=8</SideBar>
// 				</Grid>
// 				<Grid item xs={10} container columnSpacing={2} rowSpacing={0}>
// 					<Grid item xs={6}>
// 						<Item>xs=8</Item>
// 					</Grid>
// 					<Grid item xs={6}>
// 						<Item>xs=8</Item>
// 					</Grid>
// 					<Grid item xs={6}>
// 						<Item>xs=8</Item>
// 					</Grid>
// 					<Grid item xs={6}>
// 						<Item>xs=8</Item>
// 					</Grid>
// 				</Grid>
// 			</Grid>
// 		</Box>
// 	);
// };

// export default BaseLayout;
