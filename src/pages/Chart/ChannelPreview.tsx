import React, { useEffect } from 'react';
let i = 0;

const ChannelPreview = ({ setActiveChannel, channel }) => {
  const unreadCount = channel.countUnread();

  useEffect(() => {
    i += unreadCount;
  });

  return (
    <div style={{ height: '40px', fontSize: '1.2rem' }}>
      <a onClick={(e) => setActiveChannel(channel, e)}>{channel.data.name}</a>
      <span>{unreadCount !== 0 ? unreadCount : null}</span>
    </div>
  );
};

export default ChannelPreview;
