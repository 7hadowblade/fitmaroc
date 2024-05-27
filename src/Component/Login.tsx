import React, { useEffect } from 'react'; 
import '../Login.css';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer2 from './Footer2';
import DarkMode from './DarkMode';
declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (params: { appId: string, cookie: boolean, xfbml: boolean, version: string }) => void;
      login: (callback: (response: any) => void, options: { scope: string }) => void;
    };
  }
}

const Login: React.FC = () => {
    const { darkMode } = DarkMode();
  useEffect(() => {
    
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '2772324249601091',
        cookie: true,
        xfbml: true,
        version: 'v13.0'
      });
    };
    
   
    (function(d, s, id) {
      var js: HTMLScriptElement, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement; 
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      if (fjs) {
        fjs.parentNode?.insertBefore(js, fjs);
      }
    }(document, 'script', 'facebook-jssdk'));
  }, []);

 
  const handleFacebookLogin = () => {
    window.FB.login(function(response: any) {
      if (response.authResponse) {
        console.log('Logged in successfully');
        
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {scope: 'public_profile,email'});
  };

  return (<div className={darkMode ? 'dark-mode' : ''}><div className='face'>
    <h1>You can login with facebook <br/>or Gmail</h1>
<button className="facebook-login-btn" onClick={handleFacebookLogin}>  <span><FontAwesomeIcon icon={faFacebookF} className="facebook-icon" />
 </span> Login with Facebook
</button>


       <Footer2/>
       </div></div>
  );
};

export default Login;
