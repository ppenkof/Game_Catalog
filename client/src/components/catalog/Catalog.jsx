import GameCard from "../game-card/GameCard";
import useRequest from "../../hooks/useRequest";

// const baseUrl = 'http://localhost:3030/jsonstore/games';
export default function Catalog() {
    //New method with custom hook
    const {data: games} = useRequest('/data/games', []);

    //useEffect(() => {
        //Old method
        // (async () => {
        //     try {
        //         const response = await fetch(baseUrl);
        //         const result = await response.json();
        //         setGames(Object.values(result));

        //     } catch (error) {
        //         alert(error.message);
        //     }
           
        // })();

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>

            {games.length === 0 && <h3 className="no-articles">No Added Games Yet</h3>}

            <div className="catalog-container">
                {games.map(game => <GameCard key={game._id} {...game} />)}
            </div>

        </section>
    );
}