import { gql } from "@apollo/client";

export const LOAD_ENGINEERS = gql`
  query MyQuery {
    engineers {
      id
      name
      is_deleted
    }
  }
`;

export const GET_MANAGERS = gql`
  query getManagers {
    managers {
      id
      name
    }
  }
`;

export const CREATE_ENGINEERS_MUTATION = gql`
  mutation CreateEngineer($name: String!) {
    insert_users_one(
      object: { name: $name, roles: ["engineer"], is_deleted: false }
    ) {
      id
      name
      is_deleted
    }
  }
`;

export const DELETE_ENGINEERS = gql`
  mutation DeleteEngineers($id: Int!) {
    update_engineers(where: { id: { _eq: $id } }, _set: { is_deleted: true }) {
      returning {
        is_deleted
        name
      }
    }
  }
`;

export const ADD_RELATIONS = gql`
  mutation MyMutation($engineer: Int!, $manager: Int!) {
    insert_users_relations_one(
      object: { engineer: $engineer, manager: $manager }
    ) {
      engineer
      manager
      created_by
      created_at
    }
  }
`;

export const GET_MANAGERS_BY_ENGINEER = gql`
  mutation getManagersByEngineer($id: Int!) {
    get_managers_by_engineer(args: { engineer_id: $id }) {
      name
      id
    }
  }
`;

export const UPDATE_ENGINEERS = gql`
  mutation updateEngineers($id: Int!, $name: String!) {
    update_engineers(where: { id: { _eq: $id } }, _set: { name: $name }) {
      returning {
        name
      }
    }
  }
`;

export const DELETE_RELATIONS = gql`
  mutation deleteRelations($idE: Int!, $idM: Int!) {
    delete_users_relations(
      where: { engineer: { _eq: $idE }, manager: { _eq: $idM } }
    ) {
      returning {
        engineer
        manager
      }
    }
  }
`;
