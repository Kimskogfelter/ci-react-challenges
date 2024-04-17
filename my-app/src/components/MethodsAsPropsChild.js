import React from 'react'

function MethodsAsPropsChild(props) {
  return (
    <div>
         {props.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete the steps below:</p>
                <ol>
                   <li>Confirm email</li>
                   <li>Complete profile</li> 
                   <li>Subscribe to the newsletter</li>
                    </ol> 
                    <button onClick={props.handleSignOut}>Sign out</button>  
                    </div>
        ) : (
        <div>
        <p>Please sign in</p>
             <button onClick={props.handleSignIn}>Sign In</button>   
             </div>   
        )}
    </div>
  );
}

export default MethodsAsPropsChild