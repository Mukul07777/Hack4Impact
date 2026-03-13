import { generateScenario, evaluatePrediction } from "../services/gameEngine.js"

export const startGame = async (req,res)=>{

    try{

        const {symbol} = req.body

        const scenario = await generateScenario(symbol)

        res.json(scenario)

    }catch(err){

        res.status(500).json({error:err.message})

    }

}

export const checkPrediction = (req,res)=>{

    const {prediction, actual} = req.body

    const result = evaluatePrediction(prediction, actual)

    res.json(result)

}