const Agent = ({agent}) =>{
    return (
        <div className="Agent">
            <picture>
                <img src={agent.displayIcon} alt={agent.displayName} width="150px" />
            </picture>
            <h2>{agent.displayName}</h2>
        </div>
    )
}

export default Agent;