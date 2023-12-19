import {
  Box,
  Button,
  Divider,

  Grid,
  Icon,

  styled,
} from "@mui/material";
import { H5, H6, Span } from 'app/theme/Typography';
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import ListItems from "./ListItem";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));
const ResearchQuestionForm = () => {
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
  } = state;
  return (
      <div>
          <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
              <H5 >List of Questions</H5>
              <Grid container spacing={6}>
                  <Grid item lg={10} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                      <TextField
                          type="text"
                          name="description"
                          id="standard-basic"
                          value={name || ""}
                          onChange={handleChange}
                          errorMessages={["this field is required"]}
                          label="Please enter a question"
                          validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
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
                      <ListItems items={["Question 1", "Question 2", "Question 3"]} />
                  </Grid>
              </Grid>

          </ValidatorForm>
      </div>
  )
}

export default ResearchQuestionForm