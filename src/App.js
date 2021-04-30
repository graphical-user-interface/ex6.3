import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	Container,
	Paper,
	Typography,
	TextField,
	Select,
	MenuItem,
	Box,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
	},
	box: {
		display: "flex",
		justifyContent: "space-between",
	},
	input: {
		height: 30,
	},
}))

const data = {
	en: {
		EN: "English",
		FI: "Finnish",
		REVERSER: "Reverser",
		REVERSED: "Reversed:",
		INPUT: "Input:",
	},
	fi: {
		EN: "Englangtia",
		FI: "Suomi",
		REVERSER: "Peruutin",
		REVERSED: "Päinvastaiseksi:",
		INPUT: "Tulo:",
	},
}

export default function App() {
	const classes = useStyles()
	const [text, setText] = useState()
	const [lang, setLang] = useState("en")
	const handleChangeText = (e) => {
		const newText = e.target.value.split("").reverse().join("")
		setText(newText)
	}
	const handleLanguageChange = (e) => {
		setLang(e.target.value)
	}
	return (
		<div className={classes.root}>
			<Container maxWidth='sm'>
				<Paper elevation={2} className={classes.paper}>
					<Box className={classes.box}>
						<Typography variant='h6'>
							{data[lang].REVERSER}
						</Typography>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={lang}
							onChange={handleLanguageChange}>
							<MenuItem value='en'>{data[lang].EN}</MenuItem>
							<MenuItem value='fi'>{data[lang].FI}</MenuItem>
						</Select>
					</Box>
					<Box className={classes.box}>
						<Typography variant='h6'>{data[lang].INPUT}</Typography>
						<Typography variant='h6'>
							{data[lang].REVERSED}
						</Typography>
					</Box>
					<Box className={classes.box}>
						<TextField
							InputProps={{
								className: classes.input,
							}}
							onChange={handleChangeText}
							variant='outlined'
						/>
						<Typography variant='h6'>{text}</Typography>
					</Box>
				</Paper>
			</Container>
		</div>
	)
}
