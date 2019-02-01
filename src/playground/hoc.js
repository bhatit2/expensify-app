// Higher Order Component (HOC) - A component that renders another component.
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h2> Info</h2>
            <p> info is : {props.info}</p>
        </div>
    )
}

const WithInfoWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>warning</p>
            {props.isAdmin && <p>User is admin</p>}
            <WrappedComponent info={props.info}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>warning</p>
            {props.isAuthenticated && <p>User is admin</p>}
            <WrappedComponent info={props.info}/>
        </div>
    )
}
const AdminInfo = WithInfoWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo info={'this is info'} isAuthenticated={false}/>, document.getElementById('app'));