import React from "react";
import { Button, Input, Container, Header } from "semantic-ui-react";
import withData from "./lib/withData";

import { AddUserMutation, ADD_USER } from "../components/graphql/addUser";

interface State {
  username: string;
  email: string;
  password: string;
}

class Register extends React.Component<{}, State> {
  state = {
    username: "",
    email: "",
    password: "",
  };

  onChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <AddUserMutation mutation={ADD_USER}>
        {register => (
          <Container text>
            <Header as="h2">Register</Header>
            <Input
              name="username"
              onChange={this.onChange}
              value={username}
              placeholder="Username"
              fluid
            />
            <Input
              name="email"
              onChange={this.onChange}
              value={email}
              placeholder="Email"
              fluid
            />
            <Input
              name="password"
              onChange={this.onChange}
              value={password}
              type="password"
              placeholder="Password"
              fluid
            />
            <Button
              onClick={() => {
                register({ variables: this.state });
              }}
            >
              Submit
            </Button>
          </Container>
        )}
      </AddUserMutation>
    );
  }
}

export default withData(Register);
