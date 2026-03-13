import API_BASE from "./api"

export const getChartData = async(symbol)=>{

    const res = await fetch(`${API_BASE}/stock/chart/${symbol}`)
    return res.json()

}

export const getFundamentals = async(symbol)=>{

    const res = await fetch(`${API_BASE}/stock/fundamentals/${symbol}`)
    return res.json()

}