import Coin from "./coin"

export default function CoinList({filteredCoins}) {
    return (
        <>
        {filteredCoins.map(coin => {
                return <Coin 
                    key={coin.id}
                    id={coin.id}
                    name={coin.name}
                    price={coin.price}
                    symbol={coin.symbol}
                    marketCap={coin.market_cap}
                    volume={coin.total_volume}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                />
            })}
        </>
    )
}