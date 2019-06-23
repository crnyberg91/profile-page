import React from "react";

function About() {
    return (
        <>
            <div className='row header-row'>
            </div>
            <div className="aboutP">
                <p className='topP'>
                    I am Christopher Nyberg, a Latino American coder striving for a career in full stack web development.
                    Although I never worked in the web development field professionally before, my prior education and job
                    experience has given me the strengths to work in various environments.
			</p>
                <p>
                    Currently, this page is under constant construction, so feel free to check in regularly to keep up to
                    date with my progress.
			</p>
                <h1 className="language-list"><i className="devicon-css3-plain-wordmark colored"></i>
                    <i className="devicon-html5-plain-wordmark"></i>
                    <i className="devicon-javascript-plain colored"></i>
                    <i className="devicon-git-plain"></i>
                    <i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-mongodb-plain-wordmark colored"></i>
                    <i className="devicon-mysql-plain-wordmark colored"></i>
                    <i className="devicon-heroku-original-wordmark colored"></i>
                    <i className="devicon-github-plain"></i>
                </h1>
            </div>
        </>
    )
}

export default About;