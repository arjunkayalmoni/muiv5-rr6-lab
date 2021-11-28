import { TextField, Stack } from "@mui/material"

const style = {
	m: 2,
	width: { sm: 200, md: 300, lg: 600 },
	backgroundColor: { xs: "secondary.light", sm: "brown" },
	boxShadow: 6,
	mb: 2,
	border: "solid red 2px",
	"& .MuiFilledInput-input": { backgroundcolor: "white" },
};

export default function CustomSxTextFields() {
    return (
		<Stack>
			<TextField
				sx={{
					...style,
					// mb: 2,
					// border: "solid red 2px",
					// "& .MuiFilledInput-input": { backgroundcolor: "white" },
				}}
				id="standard-basic"
				label="Filled"
				variant="filled"
			/>
			<TextField
                sx={ {
                    ...style,
                    "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": {
                            borderColor: 'purple'
                        }
                    }
                } }
				id="standard-basic"
				label="Standard"
				variant="outlined"
			/>
		</Stack>
	);
}
