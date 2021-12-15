import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { LanguageContext } from "./LanguageContext";


const endpoint = "https://valorant-api.com/v1/agents/";
const Details = () =>{

    const { uuid } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [agent, setAgent] = useState({});
    const [hasFound, setFound] = useState(false);
    const [audio] = useState(new Audio());
    const [lang] = useContext(LanguageContext);
    
    useEffect(()=>{
        getAgent();
        async function getAgent(){
            const res = await fetch(`${endpoint}${uuid}?language=${lang}`);
            if(res.status === 200){
                const json = await res.json();
                await setAgent(json.data);
                setFound(true);
                audio.src = json.data.voiceLine.mediaList[0].wave;                        
            }
            setLoading(false);            
            
        }
    }, [lang]);

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(!hasFound){
        return <h1>No agent found</h1>
    }
    return (
        <div className="details-wrapper">
            <article className="agent-details">
                <div className="details-image-rol">                                
                    <picture>
                        <img 
                            src={agent.fullPortrait} 
                            alt={agent.displayName} 
                            height="480px"                    
                        />
                    </picture>            
                    <button 
                        onClick={()=> audio.play()}>
                        Escuchar
                    </button>
                </div>
                <div className="details-info">
                <div className="rol">
                        <h3>{agent.role.displayName}</h3>
                        <picture>
                            <img src={agent.role.displayIcon} alt={agent.role.displayName} 
                            width="60px" />
                        </picture>
                    </div>
                    <h1>{agent.displayName}</h1>
                    <p>{agent.description}</p>
                    <article className="agent-abilities">
                            {agent.abilities.map( ability =>{
                                return (                            
                                    <div className="ability" key={ability.displayName} >
                                        {
                                            ability.displayIcon ? (                                            
                                                <picture>
                                                    <img src={ability.displayIcon} alt={ability.displayName}
                                                    width="60px" />
                                                </picture>
                                            ):(<span></span>) 
                                        } 
                                        <div className="info-ability">                                    
                                            <strong>{ability.displayName}</strong>                                    
                                            <p>{ability.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </article>
                </div>
            </article>
        </div>
    )
}

export default Details;