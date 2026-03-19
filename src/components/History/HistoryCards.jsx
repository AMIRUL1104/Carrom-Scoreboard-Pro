import MatchCard from "./MatchCard";

function HistoryCards({ allMatch, openModal }) {
  return (
    <div className=" my-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {allMatch.map((match) => {
        return <MatchCard key={match.id} match={match} openModal={openModal} />;
      })}
    </div>
  );
}

export default HistoryCards;
