import React from 'react';

const  AuthTabs = props => (
    <ul className="nav nav-tabs nav-fill">
        {
            props.tabs.map((tab, i) => (
                <li key={i} className="nav-item" onClick={() => props.handleClick(i)}>
                    <a className={"nav-link " + (props.tabIndex === i ? "active" : "")} href="#">{tab}</a>
                </li>
            ))
        }
    </ul>
)

export default AuthTabs;