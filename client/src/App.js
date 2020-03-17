import React from 'react';
import MenuForm from './Components/MenuForm';
import MenuList from './Components/MenuList';
import { Container, } from "semantic-ui-react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { menus: [], };

  // componentDidMount() {
  //   axios.get("api/menus")
  //   .then( res => {
  //     this.setState({ menus: res.data, });
  //   })
  //   .catch( err => {
  //     console.log(err);
  //   })
  // }

  componentDidMount() {
    //make api call here to get items
    axios
      .get("api/menus")
      .then(response => {
        this.setState({
          menus: response.data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          hasError: true,
          loading: false
        });
      });
  }

  addItem = (name) => {
    // Menu make api call to rails server to add item
    // Menu update state
  }

  updateMenu = (id) => {
    // Menu make api call to update Menu
    // Menu update state
  }

  deleteMenu = (id) => {
    // Menu make api call to delete Menu
    // Menu remove it from state
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <MenuForm addItem={this.addItem} />
        <br />
        <br />
        <MenuList
          menus={this.state.Menus}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />
      </Container>
    );
  }
}

export default App;