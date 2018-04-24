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

export class AllUsers extends Query<Data> {}

export const query = gql`
  {
    allUsers {
      id
      email
    }
  }
`;
