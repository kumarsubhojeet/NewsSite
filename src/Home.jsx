import react, { useState, useEffect } from "react"
import axios from 'axios'
import Cards from "./Cards"


const Home = ()=>{

    const [cardset,CardUpdate] = useState([
    ]);

    useEffect( ()=>{
        getdata();
    }, [])
   
    const getdata = async ()=>{
        const res = await axios.get(`Access-Control-Allow-Origin: *https://newsapi.org/v2/top-headlines?country=in&apiKey=30d6271c41a148ebbc8ae887904ea0f5`);
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
