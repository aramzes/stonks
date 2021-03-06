import Head from 'next/head'
import {useState} from 'react'
import CoinList from '../components/CoinList'
import SearchBar from '../components/searchBar'
import Layout from '../components/Layout'

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('')

  const allCoins = filteredCoins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) )

  const handleChange = event => {
    event.preventDefault()
    setSearch(event.target.value.toLowerCase())
  }
  return (

    <Layout>
      <Head>
            <title>Stonks</title>
            <link rel="icon" href="https://p.kindpng.com/picc/s/754-7540432_face-chin-nose-head-cheek-skin-forehead-mannequin.png" />
      </Head>
      
      <SearchBar type="text" placeholder="Search" onChange={handleChange}/>
      <CoinList filteredCoins={allCoins}/> 
    </Layout>

  )
}

export const getServerSideProps = async () => {

  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=hkd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins
    }
  }
}