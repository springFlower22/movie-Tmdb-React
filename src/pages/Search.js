import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Movie from "../components/Movie";

const Search = () => {

    const [data, setData] = useState([]);
    const [motCle, setMotCle] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3006/movies?q=${motCle}`).then((res) => {setData(res.data)});
    }, [motCle]);

    const onSearch = (e) => {
        setMotCle(e.target.value);
    }

    return (
        <div className="searchMovie">
            <Logo />
            <Navigation />
            <div className="input-container">
                <input
                  className="input" 
                  placeholder="Keyword"
                  onChange={onSearch}
                />
            </div>

            {motCle ? (
                <ul>
                {data.map((m) => (
                <Movie movie={m} key={m.id}/>
            ))}
            </ul> 
            ) : (
                <div className="placeholder-container">
                <h1>Enter a keyword</h1>
                </div>
            )}
            
        </div>
    )
}

export default Search;