import React from 'react';
import ReactDOM from 'react-dom';
import BoardContainer from "./components/BoardContainer.jsx"

window.addEventListener('load', function () {
  ReactDOM.render(
    <BoardContainer />,
    document.getElementById('app')
  );
});
