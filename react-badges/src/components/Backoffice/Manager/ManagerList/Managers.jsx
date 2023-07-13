import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { LOAD_MANAGERS } from "./QueryManagerList";
import AddManager from "../AddManager/AddManager";
import { DELETE_MANAGER } from "../DeleteManager/MutationDeleteManager";
import { useNavigate } from "react-router-dom";

const Managers = () => {
  const { loading, data, error } = useQuery(LOAD_MANAGERS);
  const [managers, setManagers] = useState([]);
  const [deleteManager] = useMutation(DELETE_MANAGER);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setManagers(data.managers);
    }
  }, [data]);

  const handleDelete = async (id) => {
    try {
      const { data } = await deleteManager({
        variables: { id }
      });
      setManagers(managers.filter((manager) => manager.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigate = () => {
    navigate("/managers/create");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Managers List</h2>
      {managers.map((manager) => (
        <h3 key={manager.id}>
          {manager.name}
          <button onClick={(e) => handleDelete(manager.id)}>delete</button>
        </h3>
      ))}
      <button onClick={handleNavigate}>Create Manager</button>
    </div>
  );
};

export default Managers;
