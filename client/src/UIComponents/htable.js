import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'employer', label: 'Employer', minWidth: 170 },
  { id: 'date', label: 'Date', minWidth: 100 },
  {
    id: 'hoursWorked',
    label: 'Hours Worked',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'amountEarned',
    label: 'Amount Earned',
    minWidth: 170,
    align: 'right'
  }
];

function createData(employer, date, hoursWorked, amountEarned) {
  return { employer, date, hoursWorked, amountEarned};
}

const rows = [
  createData('Larry G', '10/23/22', 10, '$200'),
  createData('Maggie H', '10/17/22', 8, '$160'),
  createData('Rebecca S', '10/14/22', 8, '$160'),
  createData('Maggie H', '10/12/22', 5, '$150'),
  createData('Larry G', '10/11/22', 9, '$220'),
  createData('Larry G', '10/8/22', 10, '$200'),
  createData('Maggie H', '10/5/22', 8, '$160'),
  createData('Rebecca S', '10/3/22', 8, '$160'),
];

export default function HTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', float:'right', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}