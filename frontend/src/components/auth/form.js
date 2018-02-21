import React, { Component } from 'react';

import AuthAPI from './authAPI';

const FormComponent = props => {
    const { id, label, hint = "", value, onChange } = props;
    const placeholder = props.placeholder || "Type " + label;
    return (
        <div className="form-group">
            <div>
                <label htmlFor={id}>{label}</label>
                <input type={label} className="form-control" id={id} required
                    placeholder={placeholder} defaultValue={value} onChange={e => onChange(id, e)} />
                <small className="form-text text-muted">{hint}</small>
            </div>
        </div>
    );
};

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            repeatPassword: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(key, e) {
        this.setState({[key]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const {username, password, repeatPassword} = this.state;

        if (this.props.isLogin) {
            AuthAPI.signin(username, password);

        } else {
            AuthAPI.signup(username, password, repeatPassword);
        }
    }

    render() {
        const {isLogin} = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <FormComponent id="username" label="Username" 
                    hint="We'll never share your email with anyone else."
                    value={this.state.username} onChange={this.onChange} />
                
                {!isLogin ? (
                    <FormComponent id="email" label="Email" hint="Unique username"
                        value={this.state.username} onChange={this.onChange} />
                ) : null}

                <FormComponent id="password" label="Password" value={this.state.password} 
                    onChange={this.onChange} />
                
                {!isLogin ? (
                <FormComponent id="repeatPassword" label="Repeat password" hint="Type your password again." 
                    value={this.state.repeatPassword} onChange={this.onChange} />
                ) : null}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Form;