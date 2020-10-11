import React from 'react';

// Note that without the :any, TS will infer that is will be 'any'
const Message = (prop: {message: string}): any => {
  return <p>{prop.message}</p>;
};

export default Message;
