import React from 'react'
import {
    Box,
    Button,
    Divider,

    FormControl,

    Grid,
    Icon,

    InputLabel,

    MenuItem,

    Select,

    Stack,

    styled,
} from "@mui/material";
import { H3, H5, Span } from 'app/theme/Typography';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));

const fieldsList = [
    'All metadata',
    'Title',
    'Authors',
    'Abstract',
    'Keywords',
    'Full text',
    'References',
    'DOI',
    'ISSN',
    'ISBN',
    'Publisher',
];

const operatorsList = [
    'AND',
    'OR',
    'NOT',
];

function SearchStringGroup({ groups, setGroups }) {
    return (
        <>
            {
                groups.map((item, index) => (
                    item.id === 1 ?
                        (
                            <Stack direction="row" sx={{ justifyContent: "flex-start", alignItems: "center", width: "100%", my: 2, gap: 2 }}>

                                <FormControl size="small" sx={{ width: "45%" }}>
                                    <TextField
                                        type="text"
                                        label="Please enter terms to search"
                                        onChange={(e) => setGroups(filteredGroups => filteredGroups.map((item, i) => i === index ? { ...item, terms: e.target.value } : item))}
                                        size="small"
                                        sx={{ mb: 0 }}
                                        value={item.terms}
                                    />
                                </FormControl>

                                <Box sx={{ width: "2%" }} >
                                    <H3>IN</H3>
                                </Box>

                                <FormControl size="small" sx={{ width: "17%" }}>
                                    <InputLabel id="select-metadata-label">Metadata</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="select-metadata-label"
                                        id="select-metadata"
                                        value={item.metadata}
                                        label="Metadata"
                                        sx={{ width: "200px" }}
                                        onChange={(e) => setGroups(filteredGroups => filteredGroups.map((item, i) => i === index ? { ...item, metadata: e.target.value } : item))}
                                    >
                                        {fieldsList.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                {
                                    groups.length === 1 && (
                                        <Button color="primary" variant="contained" type="submit" size="small"
                                            onClick={() => setGroups([...groups, { id: groups.length + 1, terms: '', metadata: 'All metadata', operator: 'AND' }])} >
                                            <Icon>add</Icon>
                                        </Button>
                                    )
                                }

                            </Stack>
                        )
                        :
                        (
                            <Stack direction="row" sx={{ alignItems: "center", width: "100%", my: 2, gap: 2 }}>
                                <FormControl size="small" sx={{ width: "8.5%" }}>
                                    <InputLabel id="select-metadata-label">Operator</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="select-operator-label"
                                        id="select-operator"
                                        label="Operator"
                                        value={item.operator}
                                        onChange={(e) => setGroups(filteredGroups => filteredGroups.map((item, i) => i === index ? { ...item, operator: e.target.value } : item))}
                                    >
                                        {operatorsList.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>

                                </FormControl>

                                <FormControl size="small" sx={{ width: "35%" }}>
                                    <TextField
                                        type="text"
                                        label="Please enter terms to search"
                                        onChange={(e) => setGroups(filteredGroups => filteredGroups.map((item, i) => i === index ? { ...item, terms: e.target.value } : item))}
                                        size="small"
                                        sx={{ mb: 0 }}
                                        value={item.terms}
                                    />
                                </FormControl>

                                <Box sx={{ width: "2%" }} >
                                    <H3>IN</H3>
                                </Box>

                                <FormControl size="small" sx={{ width: "17%" }}>
                                    <InputLabel id="select-metadata-label">Metadata</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="select-metadata-label"
                                        id="select-metadata"
                                        value={item.metadata}
                                        label="Metadata"
                                        sx={{ width: "200px" }}
                                        onChange={(e) => setGroups(filteredGroups => filteredGroups.map((item, i) => i === index ? { ...item, metadata: e.target.value } : item))}
                                    >
                                        {fieldsList.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                {
                                    groups.length > 1 && (
                                        <Button color="secondary" variant="contained" type="submit" size="small" onClick={() => setGroups(groups.filter((item, i) => i !== index))}>
                                            <Icon>remove</Icon>
                                        </Button>
                                    )
                                }

                                {
                                    groups.length === 1 || groups.length === index + 1 ? (
                                        <Button color="primary" variant="contained" type="submit" size="small" onClick={() => setGroups([...groups, { id: groups.length + 1, terms: '', metadata: 'All metadata', operator: 'AND' }])}>
                                            <Icon>add</Icon>
                                        </Button>
                                    )
                                        :
                                        null
                                }

                                {/* <Button color="secondary" variant="contained" type="submit" size="small" >
                                    <Icon>remove</Icon>
                                </Button>

                                <Button color="primary" variant="contained" type="submit" size="small" >
                                    <Icon>add</Icon>
                                </Button> */}

                            </Stack>
                        )
                ))
            }

        </>
    )
}

export default SearchStringGroup