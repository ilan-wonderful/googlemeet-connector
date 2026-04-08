import { WonderfulSDK } from '@wonderful-sdk/contact-center';

const sdk = new WonderfulSDK({
  baseUrl: 'https://api.wonderful.ai',
  token: 'your-jwt-token',
});

const session = await sdk.chat.start({
  from: '+1234567890',   // customer's phone number
  fromType: 'phone',     // tells the platform this is a phone identifier
  agentId: 'agent-uuid', // optional — target a specific agent
  metadata: {            // optional
    name: 'John Doe',
  },
});

// Send messages
await session.send({ type: 'text', text: 'Hello!' });

// Listen for responses
session.onEvent((event) => {
  if (event.type === 'message') {
    console.log(event.data.data.text);
  }
});