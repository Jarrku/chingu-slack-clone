import React from "react";
import { AllUsers, ALL_USERS } from "./graphql/allUsers";

interface Props {
  title: string;
}

const Home = () => (
  <AllUsers query={ALL_USERS}>
    {({ data, loading, error }) => {
      return data.allUsers.map(({ id, email }) => <h1 key={id}>{email}</h1>);
    }}
  </AllUsers>
);

export default Home;
