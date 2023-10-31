import { useEffect, useState } from 'react';

const Home = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        // Make an HTTP request to the Kemet backend
        fetch('http://127.0.0.1:8080/api/time')
            .then((response) => response.text())
            .then((data) => setTime(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Nefertari Front-End</h1>
            <p>{time}</p>
        </div>
    );
};

export default Home;
