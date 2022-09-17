import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Movie from "../components/Movie";

const All = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get("http://localhost:3006/movies").then((res) => setData(res.data));
    }

    return (
        <div className="affichage">
            <Logo />
            <Navigation />
            <h1>Below the list of all movies</h1>
            {data.map((m) => (
                <Movie movie={m} key={m.id}/>
            ))}
        </div>
    )
}

export default All;