import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import GamesContexts from "./GamesContext";
const WinTable = () => {
    const {Games } = useContext(GamesContexts);
    
    let GamesArrayWinner = {};
    let i = 0;
    Games.forEach((elem) => {
      const data = JSON.parse(elem);
      GamesArrayWinner[i++] = {Winner: data.Winner, Date: data.GameDate};
    });
    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Winner</TableCell>
                        <TableCell align="right">GameDate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.entries(GamesArrayWinner).map(([key, value]) => (
                        <TableRow
                            key={key}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {value.Winner}
                            </TableCell>
                            <TableCell align="right">{value.Date}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default WinTable;
