import { fetchChart } from "./stockService.js"
import { determineCandle } from "../utils/candleUtils.js"

export const generateScenario = async(symbol)=>{

    const chart = await fetchChart(symbol)

    const randomIndex = Math.floor(Math.random()*(chart.length-20)) + 10

    const visibleChart = chart.slice(0,randomIndex)

    const nextCandle = chart[randomIndex]

    const actual = determineCandle(nextCandle)

    return {

        visibleChart,
        actual

    }

}

export const evaluatePrediction = (prediction, actual)=>{

    if(prediction === actual){

        return{

            correct:true,
            message:"Correct prediction! Great analysis."

        }

    }

    return{

        correct:false,
        message:"Incorrect. Review trend and fundamentals."

    }

}