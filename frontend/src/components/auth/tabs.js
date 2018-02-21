import React from 'react';

const  AuthTabs = props => (
    <ul className="nav nav-tabs nav-fill">
        {
            props.tabs.map((tab, i) => (
                <li key={i} className="nav-item" onClick={e => props.handleClick(i, e)}>
                    <a className={"nav-link " + (props.tabIndex === i ? "active" : "")} >{tab}</a>
                </li>
            ))
        }
    </ul>
)

export default AuthTabs;