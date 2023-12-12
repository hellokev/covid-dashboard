import nationalData from '../data/national-history.json';
import stateData from '../data/all-states-history.json';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CovidTable() {

    const latestNatData = nationalData[0]
    const latestStateDate = stateData.reduce((acc, stateInfo) => {
        if(!acc[stateInfo.state] || stateInfo.date > acc[stateInfo.state].date) {
            acc[stateInfo.state] = stateInfo;
        }
        return acc
    }, {})

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Paper sx={{ width: '50%' }}>
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <h2>United States Country Wide Covid Data</h2>
                    <Table sx={{ maxWidth: 650 }} aria-label='simple table'>
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
                                <TableCell>{latestNatData.totalTestResults}</TableCell>
                                <TableCell>{latestNatData.positive}</TableCell>
                                <TableCell>dummy data</TableCell>
                                <TableCell>{latestNatData.death}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            
            <Paper sx={{ width: '50%' }}>
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <h2>Per State Covid Data</h2>
                    <Table sx={{ maxWidth: 650 }} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>State</TableCell>
                                <TableCell>Active</TableCell>
                                <TableCell>Recovered</TableCell>
                                <TableCell>Deaths</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.values(latestStateDate).map((stateInfo) => (
                                <TableRow key={stateInfo}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{stateInfo.state}</TableCell>
                                    <TableCell>{stateInfo.positive}</TableCell>
                                    <TableCell>dummy data</TableCell>
                                    <TableCell>{stateInfo.death}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default CovidTable;