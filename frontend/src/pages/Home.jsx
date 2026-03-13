import { useNavigate } from "react-router-dom"

const stocks = [
    "ITC.NS",
    "RELIANCE.NS",
    "TCS.NS",
    "AAPL",
    "META"
]

const Home = () => {

    const navigate = useNavigate()

    return(

        <div>

            <h1>Stock Learning Game</h1>

            {stocks.map(s=>(
                <button
                    key={s}
                    onClick={()=>navigate(`/learn/${s}`)}
                >
                    {s}
                </button>
            ))}

        </div>

    )
}

export default Home