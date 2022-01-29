import React from "react"

function Body() {
    return (
        <div>
            <div className="header_img"></div>
            <div className="content">
                <div style = {{textAlign: 'center'}}>
                    <h1>Just Michael</h1>
                    <p style={{ color: 'dodgerblue', fontWeight: 'bold', fontSize: '70%', margin: "5px 0 0" }}>YOUR PYTHON GUY!</p>
                    <small><a href="mailto:kramstyles@outlook.com">Official: kramstyles@outlook.com</a></small>
                </div>
                <div className="links">
                    <a href="mailto:kramstyles@outlook.com"><i className="fa fa-envelope"> </i> Email</a>
                    <a href="https://linkedin.com/eke-mark"><i className="fab fa-linkedin"> </i> LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Body