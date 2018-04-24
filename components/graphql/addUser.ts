import { Mutation } from "react-apollo";
import gql from "graphql-tag";

interface Variables {
  username: string;
  email: string;
  password: string;
}

export const ADD_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password)
  }
`;

export class AddUserMutation extends Mutation<{}, Variables> {}
