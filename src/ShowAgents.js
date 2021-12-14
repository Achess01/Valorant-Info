import Agent from "./Agent";

const ShowAgents = ({ agents }) => {
  return (
    <section className="agents-wrapper">
      {!agents.length ? (
        <h2>No agents found</h2>
      ) : (
        agents.map((agent) => (
          <Agent
            icon={agent.displayIcon}
            name={agent.displayName}
            uuid={agent.uuid}
            key={agent.uuid}
          />
        ))
      )}
    </section>
  );
};

export default ShowAgents;
