import React from 'react';

const Signin = ({onRouteChange})=>{
  return(
    <article class="center mw5 mw6-ns br3 hidden ba b--black-10 shadow-5 mv4 center">
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input 
            onClick={()=>{onRouteChange('home')}}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
             type="submit" value="Sign in"/>
          </div>
          <div class="lh-copy mt3">
      <p  onClick={()=>{onRouteChange('register')}} className="f6 link dim black db pointer"> Register </p>
      {/*<a href="#0" class="f6 link dim black db">Forgot your password?</a>*/}
    </div>
       
        </form>
      </main>
    </article>
);

}

export default Signin;