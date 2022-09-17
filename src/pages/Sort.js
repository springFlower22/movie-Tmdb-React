import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Movie from "../components/Movie";

const Sort = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        getData();
    }, [filter]);

    const getData = () => {
        axios.get(`http://localhost:3006/movies?_sort=${filter}&_order=desc`).then((res) => setData(res.data));
    }

    const onChangeValue = (e) => {
        setFilter(e.target.value);
    }

    

    return (
        <div className="affichage">
            <Logo />
            <Navigation />
            <div className="sort-container" onChange={onChangeValue}>
                <input type="radio" value="release_date" name="filter" />Newest to oldest
                <input type="radio" value="vote_average" name="filter" />Best voted to worst
            </div>

            <div className="cancel">
                {filter && (<h5 onClick={() => setFilter("")}>Cancel sorting</h5>)}
            </div>

            {filter ? (
                <ul>
                    {data.map((m) => (
                    <Movie movie={m} key={m.id}/>
                ))}
                </ul>    
            ) : (
                <h1>Apply a filter</h1>
            )}
        </div>
    )
}

export default Sort;