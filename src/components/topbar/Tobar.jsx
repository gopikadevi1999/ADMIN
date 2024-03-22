import React from 'react'
import './Topbar.css'

function Tobar() {

    return <>
        <nav className="navbar navbar-expand-lg  bg-body-tertiary">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">RSR Crackers</a>
                <form className="d-flex">
                    <a className='login-button'>
                        <button type="button" className="btn btn-outline-light">Logout</button>
                    </a>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </form>
            </div>
        </nav>
    </>
}

export default Tobar