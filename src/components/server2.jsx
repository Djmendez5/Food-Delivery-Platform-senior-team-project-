import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('b2n84psj4quh');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmFsbGluZy1ibG9jay03In0.fc9yq6zu71eVBZXX7-l8Xj2kXUlUHxZSh6kwNxhiV1E';

chatClient.setUser(
  {
       id: 'falling-block-7',
       name: 'Kevin',
       image: 'https://getstream.io/random_svg/?id=falling-block-7&name=Falling+block'
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'food', {
  // add as many custom fields as you'd like
  image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'Food',
});

const App = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList noGroupByUser />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
