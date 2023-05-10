import { BsFillSendPlusFill } from 'react-icons/bs'
export default function Chat() {
  return (
    <div className="flex h-screen">
      <div className="bg-white w-1/3">Contacts</div>
      <div className="bg-blue-100 w-2/3 p-2 flex flex-col">
        <div className="flex-grow">Messages with selected person</div>
        <div className="flex gap-2 mx-3">
          <input
            type="text"
            placeholder="Type your message here..."
            className="bg-white border p-2 flex-grow rounded-sm"
          />
          <button className="bg-blue-500 px-3 py-2 text-white rounded-sm">
            <BsFillSendPlusFill
              style={{ fontSize: '26px' }}
              className="transition-all hover:text-blue-200"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
