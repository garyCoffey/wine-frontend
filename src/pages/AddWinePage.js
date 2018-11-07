import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import WineAPI from '../api/WineAPI.js';
import { Redirect } from 'react-router';

class AddWinePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const wineObject = {
      name: event.target.elements[0].value,
      price: event.target.elements[1].value,
      varietal: event.target.elements[2].value,
      description: event.target.elements[3].value
    }

    WineAPI.addWine(wineObject)
      .then((response) => { this.setState({ redirect: true }) })
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" />
            <ControlLabel>Price</ControlLabel>
            <FormControl type="text" />
            <ControlLabel>Varietal</ControlLabel>
            <FormControl type="text" /><br />
            <ControlLabel>Description</ControlLabel>
            <FormControl type="text" /><br />
            <Button bsStyle="primary" type="submit">Submit</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default AddWinePage;
