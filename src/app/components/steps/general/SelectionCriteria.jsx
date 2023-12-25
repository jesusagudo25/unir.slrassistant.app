import {
    Button,
    Divider,
    Stack,
    Grid,
    Icon,
    Box,
    styled,
    FormControl,
} from "@mui/material";
import { H5, Span } from 'app/theme/Typography';
import { useEffect, useState } from "react";
import { SelectValidator, TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import ListItems from "./ListItem";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
}));


export default function SelectionCriteria() {
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

    const {
        name,
    } = state;
    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null} >
                <H5 >Criterion</H5>

                    <Stack direction="row" sx={{ gap:3, alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <FormControl sx={{ width: '70%' }}> 
                            <TextField
                                type="text"
                                name="description"
                                id="standard-basic"
                                value={name || ""}
                                onChange={handleChange}
                                errorMessages={["this field is required"]}
                                label="Please enter a criterion"
                                validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
                                size="small"
                            />
                        </FormControl>
                        
                        <FormControl sx={{ width: '20%' }}>
                            <SelectValidator
                                select
                                fullWidth
                                label="Please select type"
                                name="type"
                                errorMessages={["this field is required"]}
                                size="small"
                            >
                                <option value="a">Inclusion</option>
                                <option value="b">Exclusion</option>
                            </SelectValidator>
                        </FormControl>


                        <Button color="primary" variant="contained" type="submit" size="medium" >
                            <Icon>add</Icon>
                            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Add</Span>
                        </Button>
                    </Stack>

                <Stack direction="row" spacing={2}>
                    <Box sx={{ width: '50%' }}>
                        <H5 sx={{ my: 2 }}>Criterion of inclusion</H5>
                        <Divider sx={{ mb: 2 }} />

                        <Grid container spacing={6}>
                            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                                <ListItems items={["Question 1", "Question 2", "Question 3"]} />
                            </Grid>
                        </Grid>

                    </Box>

                    <Box sx={{ width: '50%' }}>
                        <H5 sx={{ my: 2 }}>Criterion of exclusion</H5>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={6}>
                            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                                <ListItems items={["Question 1", "Question 2", "Question 3"]} />
                            </Grid>
                        </Grid>
                    </Box>

                </Stack>
            </ValidatorForm>
        </div>
    )
}