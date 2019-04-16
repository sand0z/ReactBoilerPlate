import React from 'react'
import { withRouter } from 'react-router-dom'
import AuthUserContext from './context'
import { auth } from '../firebase'
import * as ROUTES from '../../constants/routes'

const withAuthorization = (condition) => (Component) => {
    class WithAuthorization extends React.Component {
      
      componentDidMount() {
        this.listener = auth.onAuthStateChanged(
          authUser => {
            if (!condition(authUser)) {
              this.props.history.push(ROUTES.SIGNIN);
            }
          },
        );
      }
  
      componentWillUnmount() {
        this.listener();
      }
  
      render() {
        return (
          <AuthUserContext.Consumer>
            {authUser =>
              condition(authUser) ? <Component {...this.props} /> : null
            }
          </AuthUserContext.Consumer>
        );
      }
    }
  
    return withRouter(WithAuthorization);
  };
  
  export default withAuthorization