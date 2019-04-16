import React from 'react'
import { Layout } from "antd";

const PublicPage = (props) => 
    <Layout>
        {props.children}
    </Layout>

export default PublicPage