import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    Icon,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Stack,
    styled,
} from "@mui/material";
import { Span } from "app/theme/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));


const NewProjectForm = () => {
    const [state, setState] = useState({});

    useEffect(() => {
        ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
            if (value !== state.password) return false;

            return true;
        });
        return () => ValidatorForm.removeValidationRule("isPasswordMatch");
    }, [state.password]);

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    };

    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleDateChange = (date) => setState({ ...state, date });

    const {
        name,
        category,
        description,
        startDate,
        endDate,
        keywords,
        visibility
    } = state;


    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            name="name"
                            id="standard-basic"
                            value={name || ""}
                            onChange={handleChange}
                            errorMessages={["this field is required"]}
                            label="Name"
                            validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
                        />

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category || ""}
                                label="Category"
                                onChange={handleChange}
                                sx={{ mb: 2 }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            type="text"
                            name="description"
                            label="Description"
                            value={description || ""}
                            onChange={handleChange}
                            validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
                            errorMessages={["this field is required"]}
                            multiline
                        />

                        <Stack spacing={3} direction="row" sx={{ alignItems: 'center' }}>
                            <FormControl sx={{ width: '50%' }} >
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Start Date"
                                        value={startDate}
                                        onChange={handleDateChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                            <Box sx={{ width: '2%' }} >
                                <Icon>arrow_forward</Icon>
                            </Box>
                            <FormControl sx={{ width: '50%' }} >

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="End Date"
                                        value={endDate}
                                        onChange={handleDateChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        <RadioGroup
                            name="visibility"
                            sx={{ mb: 2, paddingLeft: "16px" }}
                            value={visibility || ""}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="Public"
                                label="Public"
                                labelPlacement="end"
                                control={<Radio color="secondary" />}
                            />
                            

                            <FormControlLabel
                                value="Private"
                                label="Private"
                                labelPlacement="end"
                                control={<Radio color="secondary" />}
                            />


                        </RadioGroup>
                    </Grid>
                </Grid>

                <Divider sx={{ mb:2 }} />

                <Button color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: "capitalize" }}>Create</Span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default NewProjectForm