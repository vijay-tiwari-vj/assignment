import React, { useEffect, createRef } from 'react';
import $ from 'jquery';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: absolute;
  bottom: 0px;
  width: 300px;
  border-radius: 10px 10px 0 0;
`;

const ChatHead = styled.section`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  width: 300px;
  height: 100%;
  background: #2c65c8;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.p`
  color: white;
  font-size: larger;
`;

const ChatBody = styled.section`
  display: none;
  height: 300px;
  width: inherit;
  overflow: auto;
  background: #ffffff;
  color: #4a4a4a;
  padding: 0.5rem 1rem;
`;

const ChatUsers = styled.li`
  list-style: none;
  padding: 0.2rem 0;
`;

export const Chat = ({ users }) => {
  const { chatHeadRef, chatBodyRef } = createRef();

  useEffect(() => {
    const chatHead = $('.chat-head');
    const chatBody = $('.chat-body');

    chatHead.on('click', () => {
      chatBody.slideToggle(400)
    });

  }, []);

  return (
    <div className="d-flex justify-content-end">
      <Wrapper>
        <ChatHead ref={head => head = chatHeadRef} className="chat-head">
          <span className="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" className="bi bi-chat-right mr-2" viewBox="0 0 16 16">
              <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
            </svg>
            <Title className="m-0 p-0">Chats</Title>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" className="bi bi-chevron-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg>
          </span>
        </ChatHead>
        <ChatBody ref={body => body = chatBodyRef} className="chat-body">
          <ul>
            {users.map(user => {
              return (
                <ChatUsers key={user.id} className="d-flex justify-content-between">
                  <span>
                    <Image
                      className="picture mr-2"
                      src={user.profilepicture}
                      width="30"
                      height="30"
                      roundedCircle
                    />
                    <p className="user">{user.name}</p>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#1eab5f" className="bi bi-circle-fill" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8"/>
                    </svg>
                  </span>
                </ChatUsers>
              )
            })}
          </ul>
        </ChatBody>
      </Wrapper>
    </div>
  )
}

export default Chat;
