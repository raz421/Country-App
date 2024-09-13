import { useState } from "react"
import "./Country.css"
export default function Country({country,handleVisited,handleFlags}){
    console.log(country)
    let {name,area,flags,region}=country
    let [visit,setVisit]=useState(false)
    let handleVisit=()=>{
        setVisit(!visit)
    }
    console.log(handleVisited)
    console.log(handleFlags)
    return(
        <div className="box">
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt=""/>
            <h4>region {region}</h4>
            <p>{area}</p>
            <button className="btn" onClick={()=>{handleVisited(country)}} > Visited Country</button><br></br>
            <button className="btn" onClick={()=>{handleFlags(country.flags)}}>Flag</button><br></br>
            <button className="btn" onClick={handleVisit}>{visit?"Visit":"goining to"}</button>
            {
                visit?"visted this country":"goining to visit"
            }
        </div>
    )
}