import { setPokemons, startLoadingPokemons } from "./pokemonSlice"
import { pokemonApi } from "../../../api/pokemonApi";

export const getPokemons = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        //TODO': Realizar peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        // console.log('data', data)

        const { data } = await pokemonApi(`/pokemon?limit=10&offset=${page * 10}`);

        dispatch( setPokemons({pokemons: data.results, page: page + 1 }) );
    }
}