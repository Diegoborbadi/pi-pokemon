import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getPokemon} from "../../redux/actions/index"
import Navbar from "../../components/navbar/navbar";
import Cards from "../../components/cards/cards";

import "./home.css";


const Home = () => {
    const dispatch = useDispatch()
    //redux = estado global
    const allPokemons = useSelector((state)=>state.allPokemons)
    const [filtered,setFiltered] = useState(allPokemons)
    const [searchSting,setSearchString]= useState("")

    //funciones genericas re-utilizables
    const handleChange = (event) =>{
        event.preventDefault()
        setSearchString(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault(event)
        const filtered = allPokemons.filter((pokemon) => pokemon.name.includes(searchSting));
        setFiltered(filtered)
    }
//





    useEffect(()=>{
        dispatch(getPokemon())
        //clearDetail entrar al detalle de un pokemon limpiar el estado
    },[dispatch])

    return(
        <div className="home">
            <h2 className="home-title">Home</h2>
            <Navbar handleChange = {handleChange} handleSubmit={handleSubmit}/>
            <Cards allPokemons = {filtered}/>
        </div>
    )
}

export default Home; 