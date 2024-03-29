import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import GamesContexts from "./GamesContext";
// const parseJson = (elem) => {
//   try {
//     return JSON.parse(elem, (key, value) => {
//       if (typeof value !== "string") return value;
//       return value.replace(/^"(.*)"$/, "$1")
//     });
//   } catch (e) {
//     return null;
//   }
// }
const WinTable = () => {
    const {Games } = useContext(GamesContexts);
    let GamesArrayWinner = {};
    let i = 0;
    Games.forEach((elem) => {
      const data = elem;
      if(data) GamesArrayWinner[i++] = {winner: data.winner, gamedate: data.gamedate};
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
                                {value.winner}
                            </TableCell>
                            <TableCell align="right">{value.gamedate}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default WinTable;
