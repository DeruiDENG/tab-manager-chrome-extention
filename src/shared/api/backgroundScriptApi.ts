import { sendMessageToBackground } from '../message/messageSend';
import { MessageTarget } from '../message/MessageTarget';
import { BackgroundMessageType } from '../message/MessageType';

const apiList = {
  sayHello: (name: string) => {
    return sendMessageToBackground<void>({
      target: MessageTarget.Background,
      type: BackgroundMessageType.SayHello,
      payload: { name },
    });
  },
};

export default apiList;
