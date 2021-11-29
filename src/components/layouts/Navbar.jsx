import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext } from "@mui/styled-engine";
import { palette } from "@mui/system";

export default function MuiAppBar() {
	return (
	<>
		<Box sx={{ flexGrow: 1, mb: 10 }}>
			{/* <AppBar position="fixed" sx={{ backgroundColor: "transparent" }}> */}
			{/* <AppBar position="fixed" sx={{ bgcolor: "transparent" }}> */}
			<AppBar position="fixed" enableColorOnDark={true} color="transparent">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						MUI5 App
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	</>
	);
}
