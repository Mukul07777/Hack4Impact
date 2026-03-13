import YahooFinance from "yahoo-finance2"

const yahooFinance = new YahooFinance()

export const fetchFundamentals = async (symbol) => {

    const data = await yahooFinance.quoteSummary(symbol, {
        modules: ["price", "defaultKeyStatistics", "financialData"]
    })

    return {
        marketCap: data.price?.marketCap,
        peRatio: data.defaultKeyStatistics?.forwardPE,
        revenueGrowth: data.financialData?.revenueGrowth,
        profitMargins: data.financialData?.profitMargins,
        debtToEquity: data.financialData?.debtToEquity
    }
}

export const fetchChart = async (symbol) => {

    const result = await yahooFinance.historical(symbol, {
        period1: new Date("2023-01-01"),
        period2: new Date(),       // <-- THIS IS THE FIX
        interval: "1d"
    })

    return result.slice(-200).map(candle => ({
        time: candle.date,
        open: candle.open,
        high: candle.high,
        low: candle.low,
        close: candle.close
    }))
}