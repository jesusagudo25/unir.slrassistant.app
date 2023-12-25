import {
    Box,
    Button,
    Divider,

    FormControl,

    FormLabel,

    Grid,
    Icon,

    Select,

    Stack,

    styled,
} from "@mui/material";
import { H3, H5, Span } from 'app/theme/Typography';
import { useEffect, useState } from "react";
import { SelectValidator, TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import ListItems from "./ListItem";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));

export default function SearchMethods() {

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
                <H5 >Search Strings</H5>
                <Stack direction="row" sx={{ justifyContent: "flex-start", alignItems: "center", width: "100%", my: 2, gap: 2 }}>

                    <FormControl size="small" sx={{ width: "45%"}}>
                        <TextField
                            type="text"
                            name="description"
                            id="standard-basic"
                            value={name || ""}
                            onChange={handleChange}
                            errorMessages={["this field is required"]}
                            label="Please enter terms to search"
                            validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
                            size="small"
                            sx={{  mb:0  }}
                        />
                    </FormControl>

                    <Box sx={{ width: "2%" }} >
                        <H3>IN</H3>
                    </Box>

                    <FormControl size="small" sx={{ width: "20%" }}>
                        <Select
                            fullWidth
                            label="Metadata"
                            name="metadata"
                            errorMessages={["this field is required"]}
                            sx={{ width: "200px" }}
                        >
                            <option value="a">All metadata</option>
                            <option value="b">Title</option>
                            <option value="c">Abstract</option>
                        </Select>
                    </FormControl>
                </Stack>

                <Stack direction="row"  sx={{  alignItems: "center", width: "100%", my: 2, gap: 2 }}>
                    <FormControl size="small" sx = {{ width: "8.5%"}}>
                        <Select
                            fullWidth
                            label="Metadata"
                            name="metadata"
                            errorMessages={["this field is required"]}
                        >
                            <option value="a">All metadata</option>
                            <option value="b">Title</option>
                            <option value="c">Abstract</option>
                        </Select>
                    </FormControl>

                    <FormControl size="small" sx={{ width: "35%"}}>
                        <TextField
                            type="text"
                            name="description"
                            id="standard-basic"
                            value={name || ""}
                            onChange={handleChange}
                            errorMessages={["this field is required"]}
                            label="Please enter terms to search"
                            validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
                            size="small"
                            sx={{  mb:0  }}
                        />
                    </FormControl>

                    <Box sx={{ width: "2%" }} >
                        <H3>IN</H3>
                    </Box>


                    <FormControl size="small" sx={{ width: "17%" }}>
                        <Select
                            fullWidth
                            label="Metadata"
                            name="metadata"
                            errorMessages={["this field is required"]}
                            sx={{ width: "200px" }}
                        >
                            <option value="a">All metadata</option>
                            <option value="b">Title</option>
                            <option value="c">Abstract</option>
                        </Select>
                    </FormControl>

                    <Button color="secondary" variant="contained" type="submit" size="small" >
                        <Icon>remove</Icon>
                    </Button>

                </Stack>
                <Stack direction="row" sx={{  alignItems: "center", width: "100%", my: 2, gap: 2 }}>
                    <FormControl size="small" sx = {{ width: "8.5%"}}>
                        <Select
                            fullWidth
                            label="Operator"
                            name="operator"
                            errorMessages={["this field is required"]}
                        >
                            <option value="a">AND</option>
                            <option value="b">OR</option>
                            <option value="c">NOT</option>
                        </Select>
                    </FormControl>

                    <FormControl size="small" sx={{ width: "35%"}}>
                        <TextField
                            type="text"
                            name="description"
                            id="standard-basic"
                            value={name || ""}
                            onChange={handleChange}
                            errorMessages={["this field is required"]}
                            label="Please enter terms to search"
                            validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
                            size="small"
                            sx={{  mb:0  }}
                        />
                    </FormControl>

                    <Box sx={{ width: "2%" }} >
                        <H3>IN</H3>
                    </Box>

                    <FormControl size="small" sx={{ width: "17%" }}>
                        <Select
                            fullWidth
                            label="Metadata"
                            name="metadata"
                            errorMessages={["this field is required"]}
                            sx={{ width: "200px" }}
                        >
                            <option value="a">All metadata</option>
                            <option value="b">Title</option>
                            <option value="c">Abstract</option>
                        </Select>
                    </FormControl>

                    <Button color="secondary" variant="contained" type="submit" size="small" >
                        <Icon>remove</Icon>
                    </Button>

                    <Button color="primary" variant="contained" type="submit" size="small" >
                        <Icon>add</Icon>
                    </Button>

                </Stack>

                <Stack direction="row"  sx={{ justifyContent: "flex-start", alignItems: "center", width: "100%", my: 2 , gap: 2}}>
                    <Button color="secondary" variant="contained" type="submit" size="small" >
                        Reset all
                    </Button>
                    <Button color="primary" variant="contained" type="submit" size="small" >
                        Save
                    </Button>
                </Stack>

                <Divider sx={{ mb: 2 }} />

                <Grid container spacing={6}>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                        <ListItems items={["Terms 1", "Terms 2", "Terms 3", "Terms 4", "Terms 5", "Terms 6", "Terms 7", "Terms 8", "Terms 9", "Terms 10"]} />
                    </Grid>
                </Grid>

            </ValidatorForm>
        </div>
    )
}
