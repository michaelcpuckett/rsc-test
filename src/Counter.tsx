"use client";

import { useState } from "react";
import { incrementOnServer } from "./serverFunctions";

export default function Counter() {
    const [count, setCount] = useState(0);

    async function handleIncrement() {
        const newCount = await incrementOnServer(count);
        setCount(newCount);
    }

    return <button onClick={handleIncrement}>Count: {count}</button>;
}
