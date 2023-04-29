import { Modal } from '@/components'
import { ModalChatProps } from '@app/(components)/CallToChat/types'
import {
  HeaderChat,
  HeaderChatAvatar,
  HeaderChatInformationsMe,
  BubbleChat,
  Chat,
  ChatSendMessage,
  InputMessageChat,
  SendButtonChat,
  Messages,
} from './components'
import Button from '@/components/Button'
import { useChatStore } from '@/store/modules'
export function ModalChat() {
  const { isOpenChat, setIsOpenChat } = useChatStore()
  return (
    <Modal onClose={() => setIsOpenChat(false)} open={isOpenChat}>
      <Chat>
        <div className="max-h-80  2xl:max-h-[500px]  overflow-y-auto mb-7">
          <HeaderChat>
            <HeaderChatAvatar avatar="https://media.licdn.com/dms/image/C4D03AQFCAjOpq4rrvQ/profile-displayphoto-shrink_200_200/0/1660494779852?e=1687996800&v=beta&t=M0nlr7QNHzeBlSqP4Qwt_kd3eFPAhNjrBW4rOmqjj3U" />
            <HeaderChatInformationsMe
              name="Gabriel Soares Maciel"
              status="ONLINE"
            />
          </HeaderChat>
          <Messages>
            <BubbleChat
              date="08:23 AM"
              message="Olá"
              who="Você"
              variantBubble="CLIENT"
            />
            <BubbleChat
              date="08:23 AM"
              message="Olá"
              who="Gabriel Soares Maciel"
              variantBubble="RESPONSE"
            />
          </Messages>
        </div>

        <ChatSendMessage>
          <InputMessageChat placeholder="Digite uma mensagem..." />
          <div className="flex flex-col-reverse xl:flex-row ">
            <div className=" w-64 md:w-72 mt-3 xl:w-28 xl:mr-16 xl:mt-0">
              <Button
                onClick={() => setIsOpenChat(false)}
                variant="secondary"
                label="Fechar"
              />
            </div>
            <SendButtonChat label="Enviar" />
          </div>
        </ChatSendMessage>
      </Chat>
    </Modal>
  )
}
