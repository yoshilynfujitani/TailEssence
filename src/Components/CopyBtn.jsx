import { useState, useEffect } from 'react';
import { LuCopy } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";

const CopyBtn = ({ code }) => {
    const [copySuccessMessage, setCopySuccessMessage] = useState('')

    const email = code

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopySuccessMessage('')
        }, 5000)
        return () => clearTimeout(timer)
    }, [copySuccessMessage])

    function copyEmail() {
        navigator.clipboard.writeText(email)
        setCopySuccessMessage("Copied!")

    }

    return (
        <button onClick={copyEmail} className={`px-4 py-2 bg-transparent text-white border border-subtext font-medium border-1 rounded-md my-4  `}>{copySuccessMessage ? <h1 className=''><LuCopyCheck /></h1> : <h1 className=''><LuCopy /></h1>}</button>

    )
}

export default CopyBtn