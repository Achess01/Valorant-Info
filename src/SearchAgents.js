import { useState, useEffect } from "react";
import ShowAgents from "./ShowAgents";

const endpoint = "https://valorant-api.com/v1/agents";

const SearchAgents = () => {
  const [isLoading, setLoading] = useState(true);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    requestAgents();
    async function requestAgents() {
      const res = await fetch(endpoint);
      const json = await res.json();
      const playableAgents = json.data.filter(
        (agent) => agent.isPlayableCharacter
      );
      setAgents(playableAgents);

      setLoading(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (    
      <ShowAgents agents={agents}/>    
  );
};

export default SearchAgents;
