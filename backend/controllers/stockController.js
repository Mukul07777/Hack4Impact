import { fetchFundamentals, fetchChart } from "../services/stockService.js"

export const getFundamentals = async (req,res)=>{

    try{

        const symbol = req.params.symbol

        const data = await fetchFundamentals(symbol)

        res.json(data)

    }catch(err){

        res.status(500).json({error:err.message})

    }

}

export const getChartData = async (req,res)=>{

    try{

        const symbol = req.params.symbol

        const data = await fetchChart(symbol)

        res.json(data)

    }catch(err){

        res.status(500).json({error:err.message})

    }

}