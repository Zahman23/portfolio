import {useState, useEffect} from 'react'
import { useCommandStore } from '@/store/command-store'

interface CommandInputProps {
    showCursor?: boolean;
    refs: Record<string, React.RefObject<HTMLDivElement | null>>;

}

const CommandInput = ({showCursor, refs,  }: CommandInputProps) => {
    const {currentCommand, setCurrentCommand, errorMessage, showError, handleCommand} = useCommandStore()
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        if(showCursor){
            const interval = setInterval(() => {
                setCursorVisible((prev) => !prev)
            }, 500)

            return () => clearInterval(interval)
        }
    }, [showCursor])

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        
        if(e.key === 'keydown' || e.key === 'Enter'){
            const cmd = currentCommand.trim().toLowerCase()
            handleCommand(cmd,refs)
        }
    }

    const baseClasses = ' fixed bottom-0 w-full left-0 z-10'
    

  return (
    <div className={`${baseClasses} `}>
        <div className='max-w-7xl mx-auto bg-gray-900 shadow-lg border-x border-gray-400 p-3 font-mono'>
            {showError && (
            <div className='mb-3 p-2 bg-red-900/20 border border-red-400 rounded text-red-400 text-xs whitespace-pre-line'>
                {errorMessage}
            </div>
        )}

        {/* Command Input */}
        <div className='flex items-center'>
            <span className='text-green-400 mr-2 text-sm'>$</span>
            <input
            type='text'
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyPress}
            className='bg-transparent text-green-400 outline-none flex-1 text-sm'
            placeholder='Type a command...'
            />
            {showCursor && cursorVisible && <span className='bg-green-400 text-black ml-1 text-sm'>_</span>}
        </div>
        </div>
    </div>
  )
}

export default CommandInput