import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import AuthAPI from './authAPI';

const FormComponent = props => {
    const { id, label, hint = "", value, onChange } = props;
    const placeholder = props.placeholder || "Type " + label;
    const type = 
        ['repeatPassword', 'password'].includes(id) 
        ? 'password' :
        (id === 'email' ? id : 'text');
        

    return (
        <div className="form-group">
            <div>
                <label htmlFor={id}>{label}</label>
                <input type={type} className="form-control" id={id} required
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
            repeatPassword: '',
            action: null,
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
            this.props.changeUser(username);
            
            this.setState({ action: 'login' });
        } else {
            AuthAPI.signup(username, password, repeatPassword);
            this.setState({ action: 'signup' });
        }
    }

    render() {
        const {isLogin, changeUser} = this.props;
        
        if (this.state.action === 'login') {
            this.setState({ action: null });
            return <Redirect to='/profile/' />
        }
        else if (this.state.action === 'signup') {
            this.setState({ action: null });
            return <Redirect to='/' />
        }
        
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