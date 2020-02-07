import React from 'react';

const ChannelPreview = ({ setActiveChannel, channel }) => {
  const unreadCount = channel.countUnread();

  return (
    <div style={{ height: '40px', fontSize: '1.2rem' }}>
      <a onClick={(e) => setActiveChannel(channel, e)}>{channel.data.name}</a>
      <span>{unreadCount !== 0 ? unreadCount : null}</span>
    </div>
  );
};

export default ChannelPreview;
