import "../css/Dex.css";
import {useEffect, useState} from "react";

function Mention() {
    return (
        <>
            <div className="mention">
                <div>or-yam</div>
                <div className="links">
                    <a href="https://codepen.io/oryamne" target="_blank" rel="noreferrer">
                        <div className="link-logo codepen"></div>
                    </a>
                    <a href="https://github.com/or-yam" target="_blank" rel="noreferrer">
                        <div className="link-logo github"></div>
                    </a>
                    <a href="https://dev.to/oryam" target="_blank" rel="noreferrer">
                        <div className="link-logo dev"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/oryamne/" target="_blank" rel="noreferrer">
                        <div className="link-logo linkedin"></div>
                    </a>
                </div>
            </div>

        </>
    )


}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function LeftPanel({imageUrl, name}) {

    return (
        <>
            <div id="left-panel">
                <div className="left-top-container">
                    <svg height="100" width="225" className="left-svg">
                        <polyline
                            points="0,75 70,75 90,38 224,38"
                            style={{fill: "none", stroke: "black", strokeWidth: 3}}
                        />
                    </svg>
                    <div className="lights-container">
                        <div className="big-light-boarder">
                            <div className="big-light blue">
                                <div className="big-dot light-blue"></div>
                            </div>
                        </div>
                        <div className="small-lights-container">
                            <div className="small-light red">
                                <div className="dot light-red"></div>
                            </div>
                            <div className="small-light yellow">
                                <div className="dot light-yellow"></div>
                            </div>
                            <div className="small-light green">
                                <div className="dot light-green"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="screen-container">
                    <div className="screen">
                        <div className="top-screen-lights">
                            <div className="mini-light red"></div>
                            <div className="mini-light red"></div>
                        </div>
                        <div id="main-screen" style={
                            {
                                backgroundImage:`url(${imageUrl})`,
                                backgroundSize:"cover",
                                backgroundRepeat:"no-repeat",
                            }}></div>
                        <div className="bottom-screen-lights">
                            <div className="small-light red">
                                <div className="dot light-red"></div>
                            </div>
                            <div className="burger">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buttons-container">
                    <div className="upper-buttons-container">
                        <div className="big-button"></div>
                        <div className="long-buttons-container">
                            <div className="long-button red"></div>
                            <div className="long-button light-blue"></div>
                        </div>
                    </div>

                    <div className="nav-buttons-container">
                        <div className="dots-container">
                            <div>.</div>
                            <div>.</div>
                        </div>
                        <div className="green-screen">
                            <span id="name-screen">{capitalize(name)}</span>
                        </div>
                        <div className="right-nav-container">
                            <div className="nav-button">
                                <div className="nav-center-circle"></div>
                                <div className="nav-button-vertical"></div>
                                <div className="nav-button-horizontal">
                                    <div className="border-top"></div>
                                    <div className="border-bottom"></div>
                                </div>
                            </div>
                            <div className="bottom-right-nav-container">
                                <div className="small-light red">
                                    <div className="dot light-red"></div>
                                </div>
                                <div className="dots-container">
                                    <div className="black-dot">.</div>
                                    <div className="black-dot">.</div>
                                    <div className="black-dot">.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

function RightPanel({id}) {

    return (
        <>
            <div id="right-panel">
                <div className="empty-container">
                    <svg height="100%" width="100%">
                        <polyline
                            points="0,0 0,40 138,40 158,75 250,75 250,0 0,0"
                            style={{fill: "#f2f2f2", stroke: "none", strokeWidth: 3}}
                        />
                        <polyline
                            points="0,40 138,40 158,75 250,75"
                            style={{fill: "none", stroke: "black", strokeWidth: 3}}
                        />
                    </svg>
                </div>

                <div className="top-screen-container">
                    <div id="about-screen" className="right-panel-screen">
                        Height: 70cm Weight: 6.9kg
                    </div>
                </div>

                <div className="square-buttons-container">
                    <div className="blue-squares-container">
                        {Array.from({length: 10}).map((_, i) => (
                            <div className="blue-square" key={i}></div>
                        ))}
                    </div>
                </div>

                <div className="center-buttons-container">
                    <div className="center-left-container">
                        <div className="small-reds-container">
                            <div className="small-light red">
                                <div className="dot light-red"></div>
                            </div>
                            <div className="small-light red">
                                <div className="dot light-red"></div>
                            </div>
                        </div>
                        <div className="white-squares-container">
                            <div className="white-square"></div>
                            <div className="white-square"></div>
                        </div>
                    </div>

                    <div className="center-right-container">
                        <div className="thin-buttons-container">
                            <div className="thin-button"></div>
                            <div className="thin-button"></div>
                        </div>
                        <div className="yellow-button yellow">
                            <div className="big-dot light-yellow"></div>
                        </div>
                    </div>
                </div>

                <div className="bottom-screens-container">
                    <div id="type-screen" className="right-panel-screen">grass</div>
                    <div id="id-screen" className="right-panel-screen">#{id}</div>
                </div>
            </div>

        </>
    )
}

function Search() {

    return (
        <>
            <div className="search-container">
                <input id="name-input" type="text" placeholder="Name / id"/>

                <div id="search-btn" className="ball-container">
                    <div className="upper-half-ball"></div>
                    <div className="bottom-half-ball"></div>
                    <div className="center-ball"></div>
                    <div className="center-line"></div>
                </div>
            </div>
        </>
    )
}

function Dex_2() {
    const [dex, setDex] = useState(1);
    const [pokemonData, setPokemonData] = useState(
        {
            "name": "",
            "sprite": null,
            "pokeId": 1,
            "weight": null,
            "height": null,
        }
    );

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${dex}`)
            .then((res) =>{
                if(!res.ok) {
                    throw new Error('Could not find any pokemon data.');
                }
                return res.json();}
            )
            .then( data => {
                setPokemonData(
                    {
                        name: data.name,
                        sprite: data.sprites.front_default,
                        // description: data.flavor_text_entries.flavor_text
                        pokeId: data.id
                    }
                );
            })
            .catch(err => console.log(err));
    },[dex])
    return (
        <>
            <Mention/>

            <div className="logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png"
                    height="100%"
                    alt="logo"
                />
            </div>
            <Search/>


            <div id="pokedex">
                <LeftPanel imageUrl={pokemonData.sprite}
                name={pokemonData.name}/>
                <RightPanel id={pokemonData.pokeId}/>
            </div>
        </>
    );
}

export default Dex_2;