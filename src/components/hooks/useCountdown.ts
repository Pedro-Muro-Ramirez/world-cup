import { useState, useEffect } from "react";

export default function useCountdown(date: Date) {
    const [now, setNow] = useState(() => Date.now())

    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000)
        return () => clearInterval(timer)
    }, [])

    const difference = Math.max(0, date.getTime() - now)
    
    return {
    days:    Math.floor(difference / 86400000),
    hours:   Math.floor((difference % 86400000) / 3600000),
    minutes: Math.floor((difference % 3600000) / 60000),
    seconds: Math.floor((difference % 60000) / 1000),
    }
}