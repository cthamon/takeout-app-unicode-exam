import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { tick } from '../store/slices/clockSlice';
import styles from '../styles/Header.module.css';

const Clock = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const timeLeft = useSelector(state => state.clock);
    const [minute, setMinute] = useState(Math.floor(timeLeft / 60));
    const [second, setSecond] = useState(timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60);

    useEffect(() => {
        if (!timeLeft) return router.reload();

        const intervalId = setInterval(() => {
            dispatch(tick(1));
            setMinute(Math.floor(timeLeft / 60));
            setSecond(timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60);
        }, 1000);

        return () => clearInterval(intervalId);

    }, [timeLeft]);

    return (
        <div className={styles.clockFrame}>
            <h2>{minute}:{second}</h2>
            <p>left to order</p>
        </div>
    );
};

export default Clock;