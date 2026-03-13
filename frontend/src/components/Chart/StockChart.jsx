import { useEffect, useRef } from "react"
import { createChart } from "lightweight-charts"

const StockChart = ({data}) => {

    const chartRef = useRef()

    useEffect(()=>{

        if(!data || data.length === 0) return

        const chart = createChart(chartRef.current,{
            width:800,
            height:400
        })

        const candleSeries = chart.addCandlestickSeries()

        const formatted = data.map(c=>({
            time: c.time.split("T")[0],
            open: c.open,
            high: c.high,
            low: c.low,
            close: c.close
        }))

        candleSeries.setData(formatted)

        return ()=> chart.remove()

    },[data])

    return(
        <div ref={chartRef}></div>
    )
}

export default StockChart