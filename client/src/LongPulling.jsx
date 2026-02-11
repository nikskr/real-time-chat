import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const LongPulling = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        subscribe();
    }, [])

    const subscribe = async () => {
        try {
            const {data} = await axios.get('https://localhost:5000/get-messages');
            setMessages(prev => [data, ...prev]);
            await subscribe();
        } catch (error) {
            setTimeout(() => {
                subscribe();
            }, 500);
        }
    }

    const sendMessage = async () => {
        await axios.post('https://localhost:5000/new-messages', {
            message: value,
            id: Date.now()
        })
    }
    return (
        <div className='center'>
            <div className='container'>
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text" />
                    <button onClick={sendMessage}>Отправить</button>
                </div>
                <div>
                    {messages.map(mess =>
                        <div className='message' key={mess.id}>
                            {mess.message}
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default LongPulling;