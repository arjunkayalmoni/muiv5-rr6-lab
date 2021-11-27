import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StatusCard from "../StatusCards";
import { Container, Hidden } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
	marginTop: theme.spacing(2),
	marginBottom: "auto",
    minHeight: 250
}));

const SideBar = styled(Item)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
	marginTop: theme.spacing(2),
	height: "100vh",
	// width: 220,
    position: 'static'
}));

export default function BasicGrid() {
	return (
		<Box sx={{ marginRight: 1, marginLeft: 1 }}>
			<Grid container>
				<Grid item xs={2}>
					<SideBar>xs=3</SideBar>
				</Grid>
				<Grid container item xs={10} colSpacing={2} rowSpacing={0}>
					<Grid item xs={3}>
						<Item>col 1</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>col 2</Item>
					</Grid>
					<Grid item xs={3}>
						<Item> col3</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>col 4</Item>
					</Grid>
					<Grid item xs={6}>
						<Item>r2 col1</Item>
					</Grid>
					<Grid item xs={6}>
						<Item>r2 col2</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>r3 col1</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>r3 col2</Item>
					</Grid>
				</Grid>

				{/* <Grid item xs={3}>
					<Item>xs=8</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>xs=4</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>xs=4</Item>
				</Grid>
				<Grid item xs={8}>
					<Item>xs=8</Item>
				</Grid> */}
			</Grid>
		</Box>
		// <Box sx={{ marginRight: 2, marginLeft: 2 }}>
		// <Grid container spacing={2}>
		// 	<Grid item xs={2}>
		// 		<SideBar>xs=3</SideBar>
		// 	</Grid>

		// 		<Grid container item xs={10} spacing={2}>
		// 		<Grid item xs={3}>
		// 			<Item>col 1</Item>
		// 		</Grid>
		// 		<Grid item xs={3}>
		// 			<Item>col 2</Item>
		// 		</Grid>
		// 		<Grid item xs={3}>
		// 			<Item> col3</Item>
		// 		</Grid>
		// 		<Grid item xs={3}>
		// 			<Item>col 4</Item>
		// 		</Grid>
		// 		<Grid item xs={6}>
		// 			<Item>r2 col1</Item>
		// 		</Grid>
		// 		<Grid item xs={6}>
		// 			<Item>r2 col2</Item>
		// 		</Grid>
		// 		<Grid item xs={3}>
		// 			<Item>r3 col1</Item>
		// 		</Grid>
		// 		<Grid item xs={3}>
		// 			<Item>r3 col2</Item>
		// 		</Grid>
		// 	</Grid>

		// 	{/* <Grid item xs={3}>
		// 		<Item>xs=8</Item>
		// 	</Grid>
		// 	<Grid item xs={4}>
		// 		<Item>xs=4</Item>
		// 	</Grid>
		// 	<Grid item xs={4}>
		// 		<Item>xs=4</Item>
		// 	</Grid>
		// 	<Grid item xs={8}>
		// 		<Item>xs=8</Item>
		// 	</Grid> */}
		// </Grid>
		// </Box>
		// <Box sx={{ marginRight: 1, marginLeft: 1 }} maxWidth="xl">
		// 	<Grid container spacing={1}>
		// 		<Grid item xs={2}>
		// 			{/* <Paper className={ classes.sidenav }>xs=1</Paper> */}
		// 			<SideBar>xs=2</SideBar>
		// 		</Grid>
		// 		<Grid item xs={10}>
		// 			<Grid container columnSpacing={2} rowSpacing={0}>
		// 				<Grid item xs={12}>
		// 					<Item>xs=11</Item>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Item>xs=2</Item>
		// 				</Grid>
		// 				<Grid item xs={6}>
		// 					<Item>xs=2</Item>
		// 				</Grid>
		// 				<Grid item xs={6}>
		// 					<Item>xs=2</Item>
		// 				</Grid>
		// 				<Grid item xs={6}>
		// 					<Item>xs=2</Item>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Item>xs=2</Item>
		// 				</Grid>
		// 				<Grid item xs={6}>
		// 					<Item>xs=2</Item>
		// 				</Grid>
		// 				<Grid item xs={6}>
		// 					<Item>xs=6</Item>
		// 				</Grid>
		// 				<Grid item xs={6}>
		// 					<Item>xs=6</Item>
		// 				</Grid>
		// 				<Grid item xs={6}>
		// 					<Item>xs=6</Item>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Item>xs=6</Item>
		// 				</Grid>
		// 				<Grid item xs={8}>
		// 					<Item>xs=8</Item>
		// 				</Grid>
		// 				<Grid item xs={4}>
		// 					<Item>xs=4</Item>
		// 				</Grid>
		// 			</Grid>
		// 		</Grid>
		// 	</Grid>
		// </Box>
	);
}
