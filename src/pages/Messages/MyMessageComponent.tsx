import React from 'react';

import 'antd/dist/antd.css';
import { Avatar } from 'antd';

import styled from 'styled-components';

const SpeechBubbleHost = styled.div`
  background-color: lightgrey;
  padding: 10px;
  display: inline-block;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-left-color: lightgray;
    border-right: 0;
    border-top: 0;
    margin-top: -4.5px;
    margin-right: -9px;
  }
`;

const SpeechBubbleGuest = styled.div`
  background-color: lightskyblue;
  padding: 10px;
  display: inline-block;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 80%;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-right-color: lightskyblue;
    border-left: 0;
    border-top: 0;
    margin-top: -7px;
    margin-left: -14px;
  }
`;

const MyMessageComponent = (props) => {
  return (
    <div>
      {props.message.user.name === 'admin' ? (
        <div
          style={{
            textAlign: 'right',
            marginBottom: '10px',
          }}
        >
          <SpeechBubbleHost>{props.message.text}</SpeechBubbleHost>
        </div>
      ) : (
        <div style={{ marginBottom: '15px' }}>
          <div style={{ marginBottom: '10px' }}>
            <Avatar size="large" icon="user" />
            <span style={{ marginLeft: '10px' }}>
              {props.message.user.name}
            </span>
          </div>
          <SpeechBubbleGuest>{props.message.text}</SpeechBubbleGuest>
        </div>
      )}
    </div>
  );
};

export default MyMessageComponent;
