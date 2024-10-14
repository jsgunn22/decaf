import { useState, useEffect } from 'react';
import axios from 'axios';
import './tailwind.css';
import colors from '../../config/tailwindcss/colors.js';

function App() {
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/hello/')
            .then((res) => {
                setMessage(res.data.message);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const hexValues = Object.values(colors).flatMap((colorSet) =>
        Object.values(colorSet)
    );
    console.log(hexValues);

    return (
        <div className="bg-primary-5">
            <p className="tw-text-primary-1 tw-font-bold">{message}</p>
            {hexValues.map((item) => (
                <div
                    style={{ backgroundColor: item }}
                    className="tw-h-14 tw-w-48"
                ></div>
            ))}
        </div>
    );
}

export default App;
