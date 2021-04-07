import react, { useState, useEffect } from "react"
import axios from 'axios'
import Cards from "./Cards"


const Home = ()=>{

    const [cardset,CardUpdate] = useState([
    ]);

    useEffect( ()=>{
        getdata();
    }, [])
   
    const Key = ("30d6271c41a148ebbc8ae887904ea0f5");
    const getdata = async ()=>{
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${Key}`);
        res.header("Access-Control-Allow-Origin", "*");
        console.log(res);
        CardUpdate(res.data.articles)
    }
    return(
        <>
         <div class="container">
        <div class="jumbotron jumbotron-fluid">
          <h1 class="display-4">Top HeadLines</h1>
        </div>
      </div>
        <div className="container">
        <Cards card={cardset} />
        </div>
        </>

    )
}

export default Home;
