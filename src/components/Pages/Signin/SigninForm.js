import React from 'react'
import { Form, Button, Input, message } from 'antd'
import { auth } from '../../../services/firebase'
import * as ROUTES from '../../../constants/routes'
import { withRouter } from 'react-router-dom'

const INITIAL_STATE = {
    login: '',
    password: '',
}

class SigninFormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.form.validateFields(async (err, values) => {
            if( err ) {
                return;
            }

            try {
                await auth.doSignInWithEmailAndPassword(values.login, values.password);
                
                this.props.history.push(ROUTES.HOME);
            } catch(error) {
                console.log(error);
                message.error("Une erreur s'est produite lors de l'authentification. Merci de bien vouloir réessayer.");
            }
            

            console.log("Login = ", values.login, " - MdP = ", values.password);
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('login', {
                        rules: [{ required: true, message: "Merci de renseigner votre identifiant."}],
                        initialValue: INITIAL_STATE.login,
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: "Merci de renseigner votre mot de passe."}],
                        initialValue: INITIAL_STATE.password,

                    })(
                        <Input type="password" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Connexion</Button>
                </Form.Item>

            </Form>
        );
    }
}

const SigninForm = Form.create('sign_in_form')(SigninFormComponent)

export default withRouter(SigninForm)