import React from "react";
import { AllUsers, query } from "./graphql/allUsers";

interface Props {
  title: string;
}

const Home = () => (
  <AllUsers query={query}>
    {({ data, loading, error }) => {
      return data.allUsers.map(({ id, email }) => <h1 key={id}>{email}</h1>);
    }}
  </AllUsers>
);

export default Home;
