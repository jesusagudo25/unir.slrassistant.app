import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  useTheme,
} from '@mui/material';
import { Paragraph } from 'app/theme/Typography';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const TopSellingTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>List of literatures</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">No filter</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Title
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={3}>
                Authors
              </TableCell>
              <TableCell sx={{ px: 0 }} >
                status
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Paragraph sx={{ m: 0, ml: 1 }}>{product.name}</Paragraph>
                </TableCell>

                <TableCell align="left" colSpan={3} sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Paragraph sx={{ m: 0, ml: 1 }}>{product.author}</Paragraph>
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left">
                  <Small bgcolor={product.status === 'Extracted data' ? bgPrimary : bgError}>
                    {product.status}
                  </Small>
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton>
                    <Icon color="primary">edit</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={productList.length}
          rowsPerPage={5}
          page={0}
          onPageChange={() => null}
          onRowsPerPageChange={() => null}
        />
      </Box>
    </Card>
  );
};

const productList = [
  {
    name: "Machine Learning in the Diagnosis of Gastric Cancer and Pulmonary Nodule Workup",
    author: "Dr. Vamsidhar Velcheti., Dr. Shiraj Sen",
    status: "Extracted data",
  },
  {
    name: "Artificial Intelligence and Machine Learning",
    author: "Vinaytosh Mishra, Fahmida Jafri, Nafeesa Abdul Kareem, Raseena Aboobacker, Fatma Noora",
    status: "Extracted data",
  },
  {
    name: "Use of Artificial Intelligence-Machine Learning to Improve Team Efficiency in the Arthroplasty Operating Room: A Benchmark-Based Model",
    author: "Dr Richard Gold.",
    status: "Extracted data",
  },
  {
    name: "Faculty Opinions recommendation of Use of machine learning to shorten observation-based screening and diagnosis of autism.",
    author: "D P Wall, J Kosmicki, T F DeLuca, E Harstad & V A Fusaro ",
    status: "Extracted data",
  },
  {
    name: "Faculty Opinions recommendation of Probabilistic machine learning and artificial intelligence.",
    author: "Zoubin Ghahramani",
    status: "Extracted data",
  },
  {
    name: "Faculty Opinions recommendation of Artificial intelligence and machine learning in anesthesiology.",
    author: "Christopher W. Connor, M.D., Ph.D.",
    status: "Extracted data",
  },
  {
    "name": "Deep Learning and Artificial Intelligence in Healthcare",
    "author": "Pooyan Kazemian",
    "status": "Extracted data"
  },
  {
    "name": "A risky clinical trial design, and attacks on machine learning",
    "author": "SARAH CRESPI, JOEL GOLDBERG, CHARLES PILLER",
    "status": "Extracted data"
  },
  {
    "name": "Use of AI/Machine Learning Tools to Predict Outcome",
    "author": "Mr Ajay Malviya, Mr Justin Green",
    "status": "Extracted data"
  },
  {
    "name": "Tweetorial: Artificial Intelligence System Approaching Neuroradiologist-level Differential Diagnosis Accuracy at Brain MRI",
    "author": "Peter Li",
    "status": "Extracted data"
  },
  {
    "name": "Using stool samples in the diagnosis of mitochondrial disease",
    "author": "Dr Charlotte Warren",
    "status": "Extracted data"
  },
  {
    "name": "Why Operationalizing Machine Learning Requires a Shrewd Business Perspective",
    "author": "Eric Siegel",
    "status": "Extracted data"
  },

  {
    "name": "Implementation of an artificial intelligence module on the online imaging portal MYO-Share for guiding the diagnosis of muscle diseases",
    "author": "Prof Jordi Diaz Manera",
    "status": "Extracted data"
  },

];

export default TopSellingTable;
