import React, {Fragment} from 'react'

const Website = () => {
    return (
        <Fragment>
            <h2>Websites</h2>
            <div className="divider"></div>
            <div className="section">
                <ul className="website-list">
                    <li>
                        <blockquote className="flow-text">This portfolio website was built with MERN (MongoDB, Express, React, Node) stack and Redux for state management </blockquote>
                    </li>
                    <li>
                        <blockquote className="flow-text"><a href="http://aifinancialtest.zhaoningcai.com/login">This web application</a> is a simple stock management app developed with Laravel</blockquote>
                    </li>
                    <li>
                        <blockquote className="flow-text">I do not have access to the websites and web applications I developed for the companies I worked for, so I will have to describe them below:</blockquote>
                    </li>
                    <li>
                        <blockquote className="flow-text">Site Builder</blockquote>
                        <p className="flow-text">A web application written in PHP and JavaScript for internal usage. This web application allows non IT employees to easily build websites.
                        All assets, styles and the content of the websites created are stored in a MYSQL database. Since a huge number of similar websites are required to be created from time to time,
                        the web application can also duplicate an existing website created by the Site Builder so the user only has to make minor changes to create a new website.</p>
                        <p className="flow-text">The images uploaded to the Site Builder can be tagged and managed, and are stored in the database as binary data. Duplication check systems prevents the same image to be uploaded again.</p>
                    </li>
                    <li>
                        <blockquote className="flow-text">Chargeback Dispute System</blockquote>
                        <p className="flow-text">A web application written in PHP and JavaScript for internal usage. This web application allows the user to easily gather required documents to fight a credit card chargeback.
                        The system uses Puppeteer Node library to perform a series of actions in the background to obtain screenshots of required documents. The system then package everything into a PDF document and fax it to the bank.</p>
                        <p className="flow-text">The Chargeback Dispute System is also connected to a Gmail account that gets the result of the fax sent. The system parses the emails, and resend the fax up to 3 times if the fax failed to send out.
                        The system sends an email to the administrator after 3 failed attempts.</p>
                    </li>
                    <li>
                        <blockquote className="flow-text">Other Web Applications</blockquote>
                        <p className="flow-text">Participated in making a forecast system which predicts the subscription count in the coming months based on the data in the past, and an affiliate management web application to activate, deactivate,
                        create, and group affiliate campaigns, and calculate the convert rate of each affiliate on a monthly basis.</p>
                    </li>
                    <li>
                        <blockquote className="flow-text">Wordpress Websites</blockquote>
                        <p className="flow-text">Developed several websites per clients' technical requirements.</p>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Website;
