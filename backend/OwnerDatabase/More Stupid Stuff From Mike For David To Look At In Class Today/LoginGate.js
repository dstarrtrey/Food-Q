import React from "react";
import React, { Component } from 'react';
import { Query } from 'react-apollo';

// this is where you get the admin data??
import { CURRENT_USER_QUERY } from './user';

import Login from './Login';
import AdminList from './AdminList';

const LoginGate = props => (
<Query query={CURRENT_USER_QUERY}>
    {({data, loading}) => {
        if (loading) return <p>Loading...</p>;
        if (!data.me){
            return(
                <div>
                    <LoginGate />
                </div>
            );
        }
        return props.children;

    }}
</Query>
);

export default LoginGate;