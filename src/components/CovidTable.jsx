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

    const neonPurpleBoxShadow = '4px 4px 3px 0px rgba(148, 87, 235, 0.7)';

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
            <Paper sx={{ width: '50%', margin: '5px', boxShadow: neonPurpleBoxShadow }}>
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
                                <TableCell>{latestNatData.recovered}</TableCell>
                                <TableCell>{latestNatData.death}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Paper sx={{ width: '50%', margin: '5px', boxShadow: neonPurpleBoxShadow }}>
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <h2>ICUs and Hospitals</h2>
                    <Table sx={{ maxWidth: 650 }} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Icu Cumulative</TableCell>
                                <TableCell>Icu Currently</TableCell>
                                <TableCell>Hospitalized Cumulative</TableCell>
                                <TableCell>Hospitalized Currently</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow
                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                                 <TableCell>{latestNatData.inIcuCumulative}</TableCell>
                                 <TableCell>{latestNatData.inIcuCurrently}</TableCell>
                                 <TableCell>{latestNatData.hospitalizedCumulative}</TableCell>
                                 <TableCell>{latestNatData.hospitalizedCurrently}</TableCell>
                             </TableRow>                            
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            
            <Paper sx={{ width: '50%', margin: '5px', boxShadow: neonPurpleBoxShadow }}>
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
                                    <TableCell>{stateInfo.recovered}</TableCell>
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