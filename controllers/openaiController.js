const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
    apiKey: process.env.API_KEY
})
const openai = new OpenAIApi(configuration)

const AskQ = async (req,res) => {
    const ques = req.body.prompt
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: ques,
            temperature: 0.5,
            max_tokens: 1024,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        });
        const answer = response.data.choices[0].text;
        res.status(200).json({
            success: true,
            data: answer
        });
    } catch(error) {
        res.status(400).json({
            success: false,
            error: 'Stop asking questions like this!'
        });
        if(error.response) {
            console.log("error")
            console.log(error.response.status)
            console.log(error.response.data)
        } else {
            console.log(error.message)
        }
    }
}

module.exports = { AskQ }
