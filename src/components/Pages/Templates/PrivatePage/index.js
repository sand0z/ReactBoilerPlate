import React from 'react'
import { Layout, Menu, Button } from 'antd'
import { withAuthorization } from '../../../../services/sessions'
import { auth } from '../../../../services/firebase'

const { Header, Content, Sider, Footer } = Layout

const condition = (auth) => !!auth

const PrivatePage = (props) => 
    <Layout>
        <Header>
            <div>Le nom de l'application</div>
            <Button type="primary" onClick={auth.doSignOut}>Déconnexion</Button>
        </Header>
        <Layout>
            <Sider>
                <Menu>
                    <Menu.Item>Item 1</Menu.Item>
                    <Menu.Item>Item 2</Menu.Item>
                </Menu>
            </Sider>
            <Content>
                {props.children}
            </Content>
        </Layout>
        <Footer>
            <div>Legal disclaimer &copy; G&eacute;rald Grosrenaud</div>
        </Footer>
    </Layout>

export default withAuthorization(condition)(PrivatePage)