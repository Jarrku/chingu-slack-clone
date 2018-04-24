import { Query } from "react-apollo";
import gql from "graphql-tag";

interface Data {
  allUsers: [
    {
      id: string;
      email: string;
    }
  ];
}

export const ALL_USERS = gql`
  {
    allUsers {
      id
      email
    }
  }
`;

export class AllUsers extends Query<Data> {}
