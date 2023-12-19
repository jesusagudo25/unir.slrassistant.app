import {
    Button,
    Divider,

    Grid,
    Icon,

    styled,
} from "@mui/material";
import { H5,  Span } from 'app/theme/Typography';
import { useEffect, useState } from "react";
import { SelectValidator, TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import ListItems from "./ListItem";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));


export default function Source() {
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
        <H5 >Source of Data</H5>
        <Grid container spacing={6}>
            <Grid item lg={10} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                <SelectValidator
                    select
                    fullWidth
                    label="Please select a source"
                    name="source"
                    errorMessages={["this field is required"]}
                    sx={{ mb: 2 }}
                >
                    <option value="a">Google Scholar</option>
                    <option value="b">IEEE Xplore</option>
                    <option value="c">Science Direct</option>
                    <option value="d">Springer</option>
                </SelectValidator>
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} sx={{ mt: 2 }} alignItems="flex-end">
                <Button color="primary" variant="contained" type="submit" size="large" >
                    <Icon>add</Icon>
                    <Span sx={{ pl: 1, textTransform: "capitalize" }}>Add</Span>
                </Button>
            </Grid>
        </Grid>
        <Divider sx={{ mb: 2 }} />

        <Grid container spacing={6}>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                <ListItems items={["Source 1", "Source 2", "Source 3"]} />
            </Grid>
        </Grid>

    </ValidatorForm>
</div>
  )
}
