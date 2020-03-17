import React from 'react';
import { Form, Button } from "semantic-ui-react";

class MenuForm extends React.Component {
  state = { name: "", };

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: "", });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Menu"
          placeholder="Add A Menu Item"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
       <Button type='submit'>add</Button>
      </Form>
    )
  }
}

export default MenuForm;