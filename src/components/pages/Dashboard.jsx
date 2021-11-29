import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const StatuItem = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	minHeight: theme.spacing(20),
	color: theme.palette.text.secondary,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
}));

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	minHeight: theme.spacing(38),
	color: theme.palette.text.secondary,
}));

const links = [
    { name: "Stats", url: "stats" },
	{ name: "Contact", url: "contact" },
	{ name: "About", url: "about" },
];


export const Dashboard = () =>
{
    const navigate = useNavigate()
    return (
		<div>
			<h2>Dashboard</h2>
			<Grid container spacing={2}>
				<Grid item md={4} lg={3} xl={2}>
					<StatuItem>xl=8</StatuItem>
				</Grid>
				<Grid item md={4} lg={3} xl={2}>
					<StatuItem>xl=8</StatuItem>
				</Grid>
				<Grid item md={4} lg={3} xl={2}>
					<StatuItem>xl=8</StatuItem>
				</Grid>
				<Grid item md={4} lg={3} xl={2}>
					<StatuItem>xl=8</StatuItem>
				</Grid>
				<Grid item md={4} lg={3} xl={2}>
					<StatuItem>xl=8</StatuItem>
				</Grid>
				<Grid item md={4} lg={3} xl={2}>
					<StatuItem>xl=8</StatuItem>
				</Grid>

				<Grid item md={4} lg={3} xl={6}>
					<Item>xl=8</Item>
				</Grid>
				<Grid item md={4} lg={3} xl={3}>
					<Item>xl=8</Item>
				</Grid>
				<Grid item md={4} lg={3} xl={3}>
					<Item>xl=8</Item>
				</Grid>

				<Grid item md={4} lg={3} xl={6}>
					<Item>xl=8</Item>
				</Grid>
				<Grid item md={4} lg={3} xl={3}>
					<Item>xl=8</Item>
				</Grid>
				<Grid item md={4} lg={3} xl={3}>
					<Item>xl=8</Item>
				</Grid>

				{links.map((link) => {
					return (
						<Grid item md={4} lg={3} xs={6} key={link.name}>
							<Item>
								<Button
									variant="contained"
									color="primary"
									size="small"
									onClick={() => navigate(link.url)}
								>
									{link.name}
								</Button>
								<Button
									variant="outlined"
									color="primary"
									size="small"
								>
									Contained
								</Button>
							</Item>
						</Grid>
					);
				})}

				{/* <Grid item md={4} lg={3} xs={6}>
					<Item>
						<Button
							variant="contained"
							color="secondary"
							size="small"
						>
							Contained
						</Button>
						<Button
							variant="outlined"
							color="secondary"
							size="small"
							onClick={() => navigate("contact")}
						>
							Contact
						</Button>
					</Item>
				</Grid> */}
				{/* <Grid item md={4} lg={3} xs={10}>
								<Item>xs=8</Item>
							</Grid>
							<Grid item md={4} lg={3} xs={2}>
								<Item>xs=8</Item>
							</Grid>
							<Grid item md={4} lg={3} xs={10}>
								<Item>xs=8</Item>
							</Grid>
							<Grid item md={4} lg={3} xs={2}>
								<Item>xs=8</Item>
							</Grid>
							<Grid item md={4} lg={3} xs={10}>
								<Item>xs=8</Item>
							</Grid>
							<Grid item md={4} lg={3} xs={2}>
								<Item>xs=8</Item>
							</Grid>
							<Grid item md={4} lg={3} xs={10}>
								<Item>xs=8</Item>
							</Grid>
							<Grid item md={4} lg={3} xs={2}>
								<Item>xs=8</Item>
							</Grid> */}
			</Grid>
		</div>
	);
}
