import React from 'react'
import PublicPage from '../Templates/PublicPage'
import SigninForm from './SigninForm'

const Signin = (props) => 
    <PublicPage {...props}>
        <div>
            <h1>Connexion</h1>
            <SigninForm />
        </div>
    </PublicPage>

export default Signin