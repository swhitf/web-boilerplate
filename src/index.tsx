import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

const anim = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const Frame = styled.div`
    position: absolute;
    inset: 0 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: ${anim} 15s ease infinite;
	height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 72px;
    color: white;
    text-shadow: 1px 1px 1px rgba(0,0,0,.1);
`;

ReactDOM.render(<Frame>Come on in, the water is fine...</Frame>, document.getElementById('app'));

