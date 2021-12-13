const Agent = ({agent}) =>{
    return (
        <article className="Agent">
            <picture>
                <img src={agent.displayIcon} alt={agent.displayName} width="128px" />
            </picture>
            <h3>{agent.displayName}</h3>
        </article>
    )
}

export default Agent;