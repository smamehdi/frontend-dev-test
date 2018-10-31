import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Form, Segment,Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "../../node_modules/react-router-dom";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        usernameOne: '',
        usernameTwo: ''
    }
    this.handleChangeUserOne = this.handleChangeUserOne.bind(this);
    this.handleChangeUserTwo = this.handleChangeUserTwo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeUserOne (evt, {value}) {
    this.setState({ usernameOne: value})
  }
  handleChangeUserTwo (evt, {value}) {
    this.setState({ usernameTwo: value})
  }
  handleSubmit = () => {
    if (this.state.usernameOne === "" || this.state.usernameTwo === "") {
      return ("Let's Begin")
    } else {
      return (<Link to={{pathname:'/newGame/'+ this.state.usernameOne+"&"+this.state.usernameTwo, state: {usernameOne : this.state.usernameOne, usernameTwo:this.state.usernameTwo}}}><Button fluid color='teal'>Let's Begin</Button></Link>)
    }
  }
  render() {
    return (
      <div>
          <Segment basic textAlign='center'>
            <Form onSubmit={this.handleSubmit}>
                <Grid>
                    <Grid.Row centered columns={1}>
                        <Grid.Column>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    name='usernameOne'
                                    label='Player 1:' 
                                    placeholder='Player 1'
                                    onChange={this.handleChangeUserOne}
                                    value={this.state.usernameOne}  
                                    required/>
                                <Form.Input
                                    name='unsernameTwo'
                                    label='Player 2:'
                                    placeholder='Player 2'
                                    onChange={this.handleChangeUserTwo}
                                    value={this.state.usernameTwo}
                                    required/>
                            </Form.Group>
                        </Grid.Column>
                        <Form.Button fluid color='teal' content={this.handleSubmit()}/>
                    </Grid.Row>
                </Grid>
            </Form>
            </Segment>
      </div>
    );
  }
}

export default Login;
