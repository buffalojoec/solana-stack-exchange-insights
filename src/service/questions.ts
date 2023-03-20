import { questionRequest } from "../client/stack-exchange";
import { Question } from "../data/question";

const getQuestions = async (req, res, endpoint?: string) => {
    const clientResponse = await questionRequest(endpoint);
    if (!clientResponse) res.status(204).json("An error occurred");
    const data = clientResponse.items.map(item => new Question(item));
    return res.status(200).json(data)
}

export default {
    getQuestions,
}