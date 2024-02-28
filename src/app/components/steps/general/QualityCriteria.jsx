import {
    Button,
    Divider,

    Grid,
    Icon,

    styled,
} from "@mui/material";
import { H5, Span } from 'app/theme/Typography';
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import ListItems from "./ListItem";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));

function QualityCriteria() {

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
                <H5 >List of Quality Criteria</H5>
                <Grid container spacing={6}>
                    <Grid item lg={10} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            name="description"
                            id="standard-basic"
                            value={name || ""}
                            onChange={handleChange}
                            errorMessages={["this field is required"]}
                            label="Please enter a quality criteria"
                            validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
                            size="small"
                        />
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
                        <ListItems items={[{ id: 1, description: "Study design: The quality of the study design will be evaluated, giving greater weight to randomized clinical trials and well-controlled prospective studies."},
                        { id: 2, description: "Sample size: The adequacy of the sample size to detect clinically significant effects will be considered, avoiding bias due to small samples." },
                        { id: 3, description: "Statistical methods: The appropriate use of statistical methods for data analysis will be evaluated, including the appropriate selection of tests and clear presentation of results." },
                        { id: 4, description: "Bias control: The presence and control of possible biases, such as selection bias, information bias and confounding bias, will be examined." },
                        { id: 4, description: "Generalizability: The generalizability of the results to the target population will be considered, assessing whether the study sample is representative and whether the results are applicable in different clinical contexts." },
                        { id: 4, description: "Consistency of results: Consistency of results across different studies will be assessed, seeking replicability of findings in multiple settings and populations." },
                        { id: 4, description: "Transparent reporting: The quality of the study report will be assessed, including clarity and completeness in the description of methods, results and conclusions." },]} />

                    </Grid>
                </Grid>

            </ValidatorForm>
        </div>
    )
}

export default QualityCriteria