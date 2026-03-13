import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getChartData } from "../services/stockService"
import StockChart from "../components/Chart/StockChart"
import Avatar from "../components/Avatar/Avatar"

const Learn = ()=>{

    const {symbol} = useParams()
    const [data,setData] = useState([])

    useEffect(()=>{

        const load = async()=>{

            const chart = await getChartData(symbol)
            setData(chart)

        }

        load()

    },[symbol])

    return(

        <div>

            <Avatar text={`Let's analyze ${symbol} using candlestick charts.`}/>

            <StockChart data={data}/>

        </div>

    )

}

export default Learn