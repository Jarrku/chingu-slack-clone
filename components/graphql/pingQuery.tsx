import { Query } from "react-apollo";
import gql from "graphql-tag";

interface Data {
  ping: string;
}

export class PingQuery extends Query<Data> {}

export const query = gql`
  {
    ping
  }
`;
