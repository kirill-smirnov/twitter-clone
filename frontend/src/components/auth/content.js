import React from 'react';

import Form from './form';

const AuthContent = props => (
    <div className="tab-content">
        <Form isLogin={props.isLogin} />
    </div>
)

export default AuthContent;