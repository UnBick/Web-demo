export default function Notification({ type, message, onClose }) {
  return (
    <div className="fixed top-4 right-4 z-[200] animate-fade-in">
      <div className={`rounded-lg shadow-lg p-4 flex items-center gap-3 ${
        type === 'success' 
          ? 'bg-green-500 text-white' 
          : 'bg-red-500 text-white'
      }`}>
        <span className="text-2xl">
          {type === 'success' ? '✓' : '✕'}
        </span>
        <p className="font-medium">{message}</p>
        <button 
          onClick={onClose}
          className="ml-4 text-white/80 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  )
}
