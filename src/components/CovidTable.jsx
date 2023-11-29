import nationalData from '../data/national-history.json';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CovidTable() {

    const latestData = nationalData[0]

    return (
        <TableContainer component={Paper}>
            <h2>Covid-19 Table</h2>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Confirmed</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>Recovered</TableCell>
                        <TableCell>Deaths</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>{latestData.totalTestResults}</TableCell>
                        <TableCell>{latestData.positive}</TableCell>
                        {/* Still need data for recovered cases
                        <TableCell>{latestData.recovered}</TableCell> */}
                        <TableCell>{latestData.death}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CovidTable;