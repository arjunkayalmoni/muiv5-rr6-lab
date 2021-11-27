import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function StatusCard() {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				"& > :not(style)": {
					m: 2,
					width: 128,
					height: 128,
				},
			}}
		>
			{/* <Paper elevation={0} />
			<Paper /> */}
			<Paper elevation={3} />
		</Box>
	);
}
