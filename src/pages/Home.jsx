import React from 'react';

const Home = () => {
    return ( 
        <div>
            <div>INI HOME</div>
            <p className="loginfooter"> Have an account already? <a className="signuplink" onClick={event => window.location.href='/program'}>Sign in here</a> </p>

        </div>
     );
}
 
export default Home;