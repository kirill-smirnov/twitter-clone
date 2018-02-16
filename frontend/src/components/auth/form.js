import React from 'react';

const FormGroup = props => {
    return (
        <div className="form-group">
            { props.children }
        </div>  
    )
}

const Input = props => {
    const {id, label, hint=""} = props;
    const placeholder = props.placeholder || "Type: " + label;

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="email" className="form-control" id={id} aria-describedby="emailHelp" placeholder={placeholder} />
            <small className="form-text text-muted">{hint}</small>
        </div>
    )
}

const Form = props => {
    return (
        <form onSubmit={() => {console.log("submit")}}>
            <FormGroup>
                <Input id="email" label="Email address" hint="We'll never share your email with anyone else." />
            </FormGroup>
            <FormGroup>
                <Input id="password" label="Password" />
            </FormGroup>

            { !props.isLogin ? (
                <FormGroup>
                    <Input id="password" label="Repeat password" hint="Type your password again." />
                </FormGroup>
            ) : null }

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;