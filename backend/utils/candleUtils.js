export const determineCandle = (candle)=>{

    if(candle.close > candle.open){

        return "bullish"

    }

    if(candle.close < candle.open){

        return "bearish"

    }

    return "sideways"

}