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
                <div className="notes">
                    <h4>About</h4>
                    <small>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and the best practices and am always looking for new things to learn</small>
                </div>
                <div className="notes">
                    <h4>Interests</h4>
                    <small>Food expert. Music scholar, Reader, Code fanatic, Junk food, Pop Culture, Anime lover, Coffee analysist. And I love women. Hello. My God </small>
                </div>
            </div>
        </div>
    )
}

export default Body