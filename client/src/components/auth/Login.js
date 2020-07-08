import React from 'react'
import { connect } from 'react-redux'
import { startLoginUser } from '../../actions/userAction'

import '../../css/auth.css'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email : this.state.email, 
            password : this.state.password
        }

        const redirect = () => {
            return this.props.history.push('/home')
        }

        this.props.dispatch(startLoginUser(formData, redirect))
    }
    render(){
        return (
            <div className="container">
                
                <form className="form-boxAuth" onSubmit={this.handleSubmit}>
                    <h2>Sign In</h2>
                    <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} class="form-control" /></div>

                    <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} class="form-control" /></div>

                    <input type="submit" className="btn btn-primary" value="Sign In" />
                </form>

            </div>
        )
    }
}

export default connect()(Login)