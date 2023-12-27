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


const TextField = styled(TextValidator)(() => ({
    width: "100%",
}));

export default function Bibtext() {
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
        <H5 >Select file to upload (BiBTeX)</H5>

        <Stack direction="row" sx={{ gap: 3, alignItems: 'center', justifyContent: 'space-between', my: 2 }}>

            <Button
                variant="contained"
                component="label"
                sx={{ width: '20%' }}
            >
                Upload File
                <input
                    type="file"
                    hidden
                />
            </Button>
        </Stack>

    </ValidatorForm>

</div>
  )
}
