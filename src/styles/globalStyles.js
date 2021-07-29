import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box; 
  }

  html {
    min-height: 100%;
    background-color: #202020;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', -apple-system, sistem-ui, sans-serif;
  }

  :disabled {
    cursor: not-allowed;
  }

  button:hover, a:hover {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`

