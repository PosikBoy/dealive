'use client'
import React, {useState, useEffect} from "react";

const index = () => {
    const [man, setMan] = useState("Loading")
    useEffect(() => {
        fetch("http://localhost:5000/api/home").then(
            response => response.json()
        ).then(
            data => {
                setMan(data.people[0].full_name)
                }
            )
        }, [])
    return (
    <div>
        {man}
        </div>
        )
}

export default index