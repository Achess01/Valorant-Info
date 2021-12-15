import { useState, useEffect, useContext } from "react";
import ShowAgents from "./ShowAgents";
import { LanguageContext } from "./LanguageContext";

const endpoint =
  "https://valorant-api.com/v1/agents?isplayableCharacter=true&language=:LANG";

const SearchAgents = () => {
  const [isLoading, setLoading] = useState(true);
  const [agents, setAgents] = useState([]);
  const [lang] = useContext(LanguageContext);

  useEffect(() => {
    requestAgents();
    async function requestAgents() {
      const res = await fetch(endpoint.replace(":LANG", lang));
      const json = await res.json();
      const playableAgents = json.data.sort((agent1, agent2) => {
        if (agent1.displayName > agent2.displayName) {
          return 1;
        } else {
          return -1;
        }
      });
      setAgents(playableAgents);

      setLoading(false);
    }
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="agents">
      <h1>Agentes</h1>
      <ShowAgents agents={agents} />
    </div>
  );
};

export default SearchAgents;
