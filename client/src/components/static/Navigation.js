import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import {connect} from 'react-redux'
// import  { startUserLogout } from '../../actions/userAction'
import '../../css/app.css'



function Navigation(props) {

    const handleLogout = () => {
        // props.dispatch(startUserLogout())
        localStorage.clear()
        window.location.href = '/login'
    }

    return(
        <div>
        {
            Object.keys(props.user).length !== 0 || localStorage.getItem('Authorization') != null ? (
                <div>
                    <nav className="nav justify-content-end  navbarAuth">
                    <Link className="nav-item nav-link active" to="#" onClick={handleLogout}>Log Out</Link>
                    </nav>
                </div>
            ) : (
                <>
                    <div>
                        <nav className="nav justify-content-end navbarAuth" >
                        <Link className="nav-item nav-link active" to="/register">Sign Up </Link>
                        <Link className="nav-item nav-link" to="/login">Sign In</Link>
                        </nav>
                    </div>
                    <h1 className="main-header">Welcome To Project Management Software</h1>
                </>
            )
        }

    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Navigation)