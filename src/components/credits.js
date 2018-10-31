import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Segment, Header, Grid, List, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "../../node_modules/react-router-dom";

const src1 = './assets/logo.svg';

class Credits extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="Credits">
            <br/>
            <br/>
              <Image src={src1} size='huge' centered />
              <Segment basic textAlign='center'>
                <Header color='teal'> Credits </Header>
                    <Grid centered columns={3}>
                        <Grid.Column>
                            <Segment inverted textAlign='center'>
                            <List inverted>
                                <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                                <List.Content>
                                    <List.Header>Rachel</List.Header>
                                </List.Content>
                                </List.Item>
                                <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
                                <List.Content>
                                    <List.Header>Lindsay</List.Header>
                                </List.Content>
                                </List.Item>
                                <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matthew.png' />
                                <List.Content>
                                    <List.Header>Matthew</List.Header>
                                </List.Content>
                                </List.Item>
                                <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                                <List.Content>
                                    <List.Header>Jenny Hess</List.Header>
                                </List.Content>
                                </List.Item>
                                <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
                                <List.Content>
                                    <List.Header>Veronika Ossi</List.Header>
                                </List.Content>
                                </List.Item>
                            </List>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    <br/>
                    <br/>
                    <Link to={'/'} color='white'><Button color='teal'>Back to Homepage</Button></Link>
                </Segment>
                
        </div>
        )
    }
}

export default Credits