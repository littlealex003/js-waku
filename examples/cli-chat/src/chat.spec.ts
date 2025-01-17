import { expect } from 'chai';
import { ChatMessage } from 'waku/chat_message';

import { formatMessage } from './chat';

describe('CLI Chat app', () => {
  it('Format message', () => {
    const date = new Date(234325324);
    const chatMessage = new ChatMessage(date, 'alice', 'Hello world!');

    expect(formatMessage(chatMessage)).to.match(/^<.*> alice: Hello world!$/);
  });
});
