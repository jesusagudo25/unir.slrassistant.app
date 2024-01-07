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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';


const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));


const NewProjectForm = () => {
    const { REACT_APP_CLOUD_GATEWAY, REACT_APP_MICRO_REVIEW } = process.env;

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        name: "",
        category: "",
        keywords: "",
        description: "",
        startDate: new Date(),
        endDate: new Date(),
        visibility: "",
        userId: localStorage.getItem('id')
    });

    const handleSubmit = async (event) =>  {        
        setLoading(true);

        await axios.post(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_REVIEW}/projects`, data)
          .then((res) => {
    
            navigate('/dashboard/app', { replace: true });
            window.location.reload();
            setLoading(false);
    
          }).catch((err) => {
            console.log(err);
          });
    };

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            name="name"
                            id="name"
                            value={data.name || ""}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            errorMessages={["this field is required"]}
                            label="Name"
                            validators={["required", "minStringLength: 4"]}
                        />

                        <FormControl fullWidth>
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category"
                                value={data.category || ""}
                                label="Category"
                                onChange={(e) => setData({ ...data, category: e.target.value })}
                                sx={{ mb: 2 }}
                            >
                                <MenuItem value={'Health Sciences and Medicine'}>Health Sciences and Medicine</MenuItem>
                                <MenuItem value={'Social Sciences and Psychology'}>Social Sciences and Psychology</MenuItem>
                                <MenuItem value={'Information and Computing Technologies'}>Information and Computing Technologies</MenuItem>
                                <MenuItem value={'Education'}>Education</MenuItem>
                                <MenuItem value={'Environmental Sciences'}>Environmental Sciences</MenuItem>
                                <MenuItem value={'Economy and Business'}>Economy and Business</MenuItem>
                                <MenuItem value={'Engineering'}>Engineering</MenuItem>
                                <MenuItem value={'Communication Sciences'}>Communication Sciences</MenuItem>
                                <MenuItem value={'Political Science'}>Political Science</MenuItem>
                                <MenuItem value={'Law'}>Law</MenuItem>
                                <MenuItem value={'Architecture'}>Architecture</MenuItem>
                                <MenuItem value={'Design'}>Design</MenuItem>
                                <MenuItem value={'Arts'}>Arts</MenuItem>
                                <MenuItem value={'Humanities'}>Humanities</MenuItem>
                                <MenuItem value={'Agriculture'}>Agriculture</MenuItem>
                                <MenuItem value={'Other'}>Other</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            type="text"
                            name="keywords"
                            label="Keywords"
                            value={data.keywords || ""}
                            onChange={(e) => setData({ ...data, keywords: e.target.value })}
                            validators={["required", "minStringLength: 4"]}
                            errorMessages={["this field is required"]}
                            multiline
                        />

                        <TextField
                            type="text"
                            name="description"
                            label="Description"
                            value={data.description || ""}
                            onChange={(e) => setData({ ...data, description: e.target.value })}
                            validators={["required", "minStringLength: 4"]}
                            errorMessages={["this field is required"]}
                            multiline
                        />

                        <Stack spacing={3} direction="row" sx={{ alignItems: 'center' }}>
                            <FormControl sx={{ width: '50%' }} >
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Start Date"
                                        value={data.startDate}
                                        onChange={(e) => setData({ ...data, startDate: e})}
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
                                        value={data.endDate}
                                        onChange={(e) => setData({ ...data, endDate: e})}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        <RadioGroup
                            name="visibility"
                            sx={{ mb: 2, paddingLeft: "16px" }}
                            value={data.visibility || ""}
                            onChange={(e) => setData({ ...data, visibility: e.target.value })}
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


                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ mb: 2 }}
                    >
                      Register
                    </LoadingButton>
            </ValidatorForm>
        </div>
    )
}

export default NewProjectForm