import {
    Button,
    Divider,

    Grid,
    Icon,

    Stack,

    styled,
} from "@mui/material";
import { H5, Span } from 'app/theme/Typography';
import { useEffect, useState } from "react";
import { SelectValidator, TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { FormControl } from "@mui/material";


export default function Automatic() {
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
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <H5 >List of search strings</H5>
                <Stack direction="row" sx={{ gap: 3, alignItems: 'center', justifyContent: 'space-start', my: 2 }}>
                        <FormControl sx={{ width: '40%' }}>
                            <SelectValidator
                                select
                                fullWidth
                                label="Please select a search string"
                                name="type"
                                errorMessages={["this field is required"]}
                                size="small"
                            >
                                <option value="a">Systematic review</option>
                                <option value="b">Meta-analysis</option>
                                <option value="c">Randomized controlled trial</option>
                            </SelectValidator>
                        </FormControl>


                        <Button color="primary" variant="contained" type="submit" size="large" >
                            <Icon>search</Icon>
                            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Search</Span>
                        </Button>

                </Stack>

            </ValidatorForm>
        </div>
    )
}
