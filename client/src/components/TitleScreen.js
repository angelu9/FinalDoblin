import React from "react";

function TitleScreen(props) {
  return (
    <div className="overlay" id="title-overlay">
      <div id="title-screen-header">
        <div id="logo">Doblin</div>
        <ul id="menu">
          <li>
            <span onClick={props.beginStory}>Start</span>
          </li>
          <li>
            <span onClick={props.toggleLoadMenu}>Continue</span>
          </li>
          <li>
            <span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Reserved for future use
              </a>
            </span>
          </li>
          <li />
        </ul>
      </div>
    </div>
  );
}

export default TitleScreen;
