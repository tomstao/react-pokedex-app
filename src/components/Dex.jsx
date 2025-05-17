// import React, {useEffect, useState} from "react";
//
// function dex() {
//     const [dex, setDex] = useState(1);
//     const [sprite, setSprite] = useState(null);
//     const [name, setName] = useState("");
//     const [pokemonData, setPokemonData] = useState({
//         name: "",
//         sprite: null,
//         // description: "Loading description"
//     });
//
//     useEffect(() => {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${dex}`)
//         .then((res) =>{
//         if(!res.ok) {
//             throw new Error('Could not find any pokemon data.');
//         }
//             return res.json();}
//         )
//         .then( data => {
//             setPokemonData(
//                 {
//                     name: data.name,
//                     sprite: data.sprites.front_default
//                     // description: data.flavor_text_entries.flavor_text
//                 }
//             );
//         })
//             .catch(err => console.log(err));
//     },[dex])
//
//     const handleInputChange = (e) => {
//         setDex(e.target.value);
//     };
//
//
//
//     return (
//         <>
//             <div className="card border-black" style={{ width: "18rem" }}>
//                 <img
//                     src={pokemonData.sprite}
//                     className="card-img-top"
//                     alt="Card Image"
//                 />
//                 <div className="card-body">
//                     <h5 className="card-title">{pokemonData.name ? pokemonData.name.toUpperCase() : "loading"}</h5>
//                     <p className="card-text">
//                         {/*{pokemonData.description ? pokemonData.description: "Load"}*/}
//                         text holder
//                     </p>
//                     <input
//                         type="number"
//                         min="1"
//                         className="form-control"
//                         placeholder="Enter Pokemon ID"
//                         onChange={handleInputChange || 1}
//                     />
//                 </div>
//             </div>
//         </>
//     );
// }
// export default dex;