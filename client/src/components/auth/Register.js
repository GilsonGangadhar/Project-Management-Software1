import React from 'react'
import { connect } from 'react-redux'
import { startRegisterUser } from '../../actions/userAction'



 import '../../css/auth.css'

class Register extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            role : '',
            username : '',
            email : '',
            password : ''
        }
    }

    handleRole = (role) => {
        this.setState({role})
    }

    handleChange = (e) => {
       this.setState({
        [e.target.name] : e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            role : this.state.role,
            username : this.state.username,
            email : this.state.email, 
            password : this.state.password
        }

        const redirect = () => {
            return this.props.history.push('/login')
        }
        console.log(formData, 'RegisterUser')

        this.props.dispatch(startRegisterUser(formData, redirect))
    }

    render(){
        return (
            <div className="container">
                
                <form className="form-boxAuth" onSubmit={this.handleSubmit}>
                    
                    <h2>Sign Up</h2>

                    <label>Role: </label>

                    <div className="form-group">
                    <input type="radio" id="leader" value={this.state.role} onChange={() => {this.handleRole('teamLeader')}} checked={this.state.role == 'teamLeader'} className="mr-1" /><label htmlFor="leader" value="teamLeader" className="mr-3">Team Leader  </label>

                    <input type="radio" id="employee" value={this.state.role} onChange={() => {this.handleRole('developer')}} checked={this.state.role == 'developer'} className="mr-1" /><label htmlFor="employee" value="developer" className="mr-3">Developer
                    </label></div>

                    <div class="form-group">
                    <label htmlFor="username">UserName:  </label>
                    <input type="text" id="username" name="username" placeholder="UserName" value={this.state.username} onChange={this.handleChange} class="form-control" /> 
                    </div> 
                    
                    <div class="form-group">
                    <label htmlFor="email">Email:  </label>
                    <input type="text" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} class="form-control" /></div>
                    
                    
                    <div class="form-group">
                    <label htmlFor="password">Password:  </label>
                    <input type="text" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} class="form-control" /></div> 

                    <input type="submit" class="btn btn-primary" value="Submit" />
                    
                </form>
            </div>
        )
    }
}

export default connect()(Register)