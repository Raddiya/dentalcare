import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h4>1.Difference Between authentication and authorization. </h4>
            <p>-Authentication verifies who the user is. Authorization determines what resources a user can access.
                -Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authorization works through settings that are implemented and maintained by the organization.
                -Authentication is the first step of a good identity and access management process. Authorization always takes place after authentication.</p>
            <h4>2.Why are you using firebase?</h4>
            <p>-Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps.Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
            <h4>What other options do you have to implement authentication? </h4>
            <p>  -  Password-based authentication,    Two-factor/multifactor authentication, Biometric authentication, Single sign-on, Token-based authentication.</p>
            <h4>3.What other services does firebase provide other than authentication?   </h4>
            <p>-Cloud Firestore.
                Cloud Functions.
                Hosting.
                Cloud Storage.
                Google Analytics.
                Predictions.
                Cloud Messaging.</p>
        </div>
    );
};

export default Blog;