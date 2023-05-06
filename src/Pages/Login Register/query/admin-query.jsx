import { gql } from "@apollo/client"

// login
export const GET_ADMIN = gql`
query admin{
    admin{
      username
      password
    }
}
`;

// register
export const ADD_ADMIN = gql`
mutation admin($object: admin_insert_input!) {
  insert_admin_one(object: $object) {
    username
    password
  }
}
`;