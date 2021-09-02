import React from 'react'
import Layout from '../../../component/Layout'
import Requests from './comp/Requests'
import "../global.scss"

const AcceptedRequest = () => {
    return (
        <>
            <Layout>
                <div className="page">
                    <Requests />
                </div>
            </Layout>
        </>
    )
}

export default AcceptedRequest
