import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"
export default function Countries(){
    let [countries,setcountries]=useState([]);
    useEffect( ()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setcountries(data))
    },[])
    let [visited,setVisited]=useState([])
    let handleVisited=(country)=>{
        console.log(country)
       const newVisited=[...visited,country];
       setVisited(newVisited)
    }
   let [flags,setFlag]=useState([])
   let handleFlags=(flag)=>{
   let newFlags=[...flags,flag];
   setFlag(newFlags)
   }
    return (
        <div>
             <h3>Countires length:{countries.length}</h3>
             <div>
                <h4>Visited countries:</h4>
                <ul>
                    {
                        visited.map(country => <li >{country.name.common}</li>)
                    }
                </ul>  
            </div>
            <div className="image-container">
                {
                    flags.map(flag=><img src={flag.png}></img>)
                }
            </div>
            <div className="container">
                {
                    countries.map(country =><Country
                         key={country.cca3}
                          handleVisited={handleVisited}
                          handleFlags={handleFlags}
                         country={country}></Country> )
                }
            </div>
        </div>        
    )
}