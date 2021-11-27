import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";


const StatuItem = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	minHeight: theme.spacing(20),
    color: theme.palette.text.secondary,
    'display': 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
    textAlign: "center",
    minHeight: theme.spacing(35),
    color: theme.palette.text.secondary,
}));

const SideBar = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
    color: theme.palette.text.secondary,
    height: '91vh',
	position: 'fixed',
	zIndex: 1000,
	width: 270
}));

const BaseLayout = () => {
	return (
		<Box sx={{ flexGrow: 1, m: 2 }}>
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<SideBar>Hello</SideBar>
				</Grid>
				<Grid item xs={10}>
					<Grid container spacing={2}>
						<Grid item xs={2}>
							<StatuItem>xs=8</StatuItem>
						</Grid>
						<Grid item xs={2}>
							<StatuItem>xs=8</StatuItem>
						</Grid>
						<Grid item xs={2}>
							<StatuItem>xs=8</StatuItem>
						</Grid>
						<Grid item xs={2}>
							<StatuItem>xs=8</StatuItem>
						</Grid>
						<Grid item xs={2}>
							<StatuItem>xs=8</StatuItem>
						</Grid>
						<Grid item xs={2}>
							<StatuItem>xs=8</StatuItem>
						</Grid>

						<Grid item xs={4}>
							<Item>xs=8</Item>
						</Grid>
						<Grid item xs={4}>
							<Item>xs=8</Item>
						</Grid>
						<Grid item xs={4}>
							<Item>xs=8</Item>
						</Grid>

						<Grid item xs={6}>
							<Item>
								<Button variant="contained" color="primary">
									Contained
								</Button>
								<Button variant="outlined" color="primary">
									Contained
								</Button>
							</Item>
						</Grid>
						<Grid item xs={6}>
							<Item>
								<Button variant="contained" color="secondary">
									Contained
								</Button>
								<Button variant="outlined" color="secondary">
									Contained
								</Button>
							</Item>
						</Grid>
						<Grid item xs={10}>
							<Item>xs=8</Item>
						</Grid>
						<Grid item xs={2}>
							<Item>xs=8</Item>
						</Grid>
						<Grid item xs={10}>
							<Item>xs=8</Item>
						</Grid>
						<Grid item xs={2}>
							<Item>xs=8</Item>
						</Grid>
						<Grid item xs={10}>
							<Item>xs=8</Item>
						</Grid>
						<Grid item xs={2}>
							<Item>xs=8</Item>
						</Grid>
						<Grid item xs={10}>
							<Item>xs=8</Item>
						</Grid>
						<Grid item xs={2}>
							<Item>xs=8</Item>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
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
