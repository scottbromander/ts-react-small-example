import React from 'react';

interface IUserMessage {
  name: string,
  message: string
}

// Note that without the :any, TS will infer that is will be 'any'
const Message = (props: IUserMessage): any => {
  return <p>{props.name} - {props.message}</p>;
};

export default Message;
