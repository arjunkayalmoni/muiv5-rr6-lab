import { Button, Paper } from "@mui/material"
import { styled } from '@mui/system'

const StyledPaper = styled(Paper, {
    name: "StyledPaper",
    slot: "Wrapper"
})({
    color: "#6B8068",
    backgroundColor: "silver",
    margin: "auto",
    borderRadius: 2,
    height: 300,
    width: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ".MuiButton-root" : {color: 'red'}
    // backgroundImage: `url("https://picsum.photos/300/300")`,
})

const StyledPaper2 = styled(Paper, {})({

})

export default function StyledPaperExample()
{
    return (
		<>
			<StyledPaper>
				<Button variant="outlined">Text</Button>
			</StyledPaper>
			<StyledPaper2>
				<Button variant="outlined">Text</Button>
			</StyledPaper2>
		</>
	);
}
