import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const TableRelations = ({
  list,
  managerId,
  engineerId,
  deleteRelation,
  dataType
}) => {
  const navigate = useNavigate();

  const handleAddRelation = () => {
    navigate(`/managers/${managerId}/addRelation`);
  };

  const addRelations = () => {
    navigate(`/engineers/addRelations/${engineerId}`);
  };

  if (list.length === 0) {
    return (
      <Typography variant="body2" color="textSecondary">
        No relations found.
      </Typography>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {dataType === "manager" ? (
                  <Button
                    onClick={() => deleteRelation({ managerId, id: item.id })}
                  >
                    Delete
                  </Button>
                ) : (
                  <Button
                    onClick={() => deleteRelation({ engineerId, id: item.id })}
                  >
                    Delete
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      {dataType === "manager" ? (
        <Button onClick={handleAddRelation}>Add new relation</Button>
      ) : (
        <Button onClick={addRelations}>Add new relation</Button>
      )}
    </TableContainer>
  );
};

export default TableRelations;
