import Agent from "./Agent";

const ShowAgents = ({agents}) => {   
    return (
    <div className="agents">
        {!agents.length ? (
            <h2>No agents found</h2>
            ) : (
            agents.map((agent) => (
                <Agent agent={agent} key={agent.uuid}/>
            ))
        )}            
    </div> 
    )        
}

export default ShowAgents;