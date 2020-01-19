import React from "react";
import { withToggler } from './HOCs/withToggler';

function Menu(props) {
  return (
    <div>
      <button onClick={ props.toggle }>{ props.on ? "Hide" : "Show" } Menu </button>
      <nav style={{ display: props.on ? "block" : "none" }}>
        <h6>Signed in as Wim</h6>
        <p>Your Profile</p>
        <p>Your Repositories</p>
        <p>Your Stars</p>
        <p>Your Gists</p>
      </nav>
    </div>
  ) 
}

export default withToggler(Menu, { defaultOnValue: true })