import react, { useState, useEffect } from "react"
import axios from 'axios'
import EntCard from "./EntCard"


const Entertainment = ()=>{

    const [cardset,CardUpdate] = useState([
    ]);

    useEffect( ()=>{
        getdata();
    }, [])
   
    const getdata = async ()=>{
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=30d6271c41a148ebbc8ae887904ea0f5`);
        console.log(res);
        CardUpdate(res.data.articles)
    }
    return(
        <>
        <div className="container">
        <EntCard card={cardset} />
        </div>
        </>

    )
}

export default Entertainment;