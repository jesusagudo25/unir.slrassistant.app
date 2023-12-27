import {
    Button,
    Divider,

    Grid,
    Icon,

    styled,
} from "@mui/material";
import { H5,  Span } from 'app/theme/Typography';
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import ListItems from "./ListItem";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));

function SelectionProcedures() {


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
                <H5 >Describe the selection procedures</H5>
                <Grid container spacing={6}>
                    <Grid item lg={10} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            name="description"
                            id="standard-basic"
                            value={name || ""}
                            onChange={handleChange}
                            errorMessages={["this field is required"]}
                            label="Please describe the selection procedures"
                            multiline
                            rows={7}
                        />
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={2} sx={{ mt: 2 }} alignItems="flex-end">
                        <Button color="primary" variant="contained" type="submit" size="large" >
                            <Icon>save</Icon>
                            <Span sx={{ pl: 1, textTransform: "capitalize" }}>save</Span>
                        </Button>
                    </Grid>
                </Grid>

            </ValidatorForm>
        </div>
    )
}

export default SelectionProcedures