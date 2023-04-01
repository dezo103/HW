import React, {useEffect, useState} from 'react';
import {requestsAPI} from "../api/RequestsAPI";


const Request = () => {

    const [isSending, setIsSending] = useState(false)
    const [value, setValue] = useState(false)
    const [response, setResponse] = useState('')

    useEffect(() => {
        isSending &&
        requestsAPI.setRequest(value)
            .then(r => setResponse(JSON.stringify(r)))
            .catch(e => setResponse(JSON.stringify(e)))
            .finally(() => {
                setIsSending(false)})
    }, [isSending])

    const onClickHandler = () => {
        setIsSending(true)
    }

    return (
        <>
            <button onClick={onClickHandler}>button</button>
            <input type="checkbox" checked={value} onClick={() => setValue(!value)}/>
            {
                response && <p> {response}</p>
            }
        </>
    );
};

export default Request;
