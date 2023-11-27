import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getPokemon} from "../../redux/actions/index"
import Navbar from "../../components/navbar/navbar";
import Cards from "../../components/cards/cards";

import "./home.css";


const Home = () => {
    const dispatch = useDispatch()
    //redux = estado global
    const allPokemons = useSelector((state)=>state.allPokemons)
    useEffect(()=>{
        dispatch(getPokemon())
        //clearDetail entrar al detalle de un pokemon limpiar el estado
    },[dispatch])

    return(
        <div className="home">
            <h2 className="home-title">Home</h2>
            <Navbar/>
            <Cards allPokemons = {allPokemons}/>
        </div>
    )
}

export default Home; 