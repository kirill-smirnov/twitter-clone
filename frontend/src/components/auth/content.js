import React from 'react';

import Form from './form';

const AuthContent = props => ( 
    <div className="tab-content">
        <Form {...props} />
    </div>
)

export default AuthContent;