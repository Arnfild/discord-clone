import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    state = {}

    handleChange = () => {}

    render() {
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color ="grey" textAlign="center">
                        <Icon name="address book" color="grey"/>
                        Register for DiscordClone
                    </Header>
                    <Form size="large">
                        <Segment stacked>
                            <Form.Input fluid name="username" icon="user" iconPosition="left"
                            placeholder="Username" onChange={this.handleChange} type="text" />

                            <Form.Input fluid name="email" icon="mail" iconPosition="left"
                            placeholder="E-Mail Address" onChange={this.handleChange} type="email" />

                            <Form.Input fluid name="password" icon="lock" iconPosition="left"
                            placeholder="Password" onChange={this.handleChange} type="password" />

                            <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left"
                            placeholder="Password Confirmation" onChange={this.handleChange} type="password" />

                            <Button color ="grey" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    <Message>Got an account? <Link to="/login/">Login</Link></Message>
                </Grid.Column>

            </Grid>
        )
    }
}

export default Register;