import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("SETTING TIMEOUT");
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("SETTING INTERVAL");
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => {
                return prevTime - 100;
            })
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, [])


    return (
        <progress max={timeout} value={remainingTime} id="question-time" className={mode} />
    )
}