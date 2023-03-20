import { postRequest } from "../client/stack-exchange";

const getPosts = async (req, res, endpoint?: string) => {
    const clientResponse = await postRequest(endpoint);
    if (!clientResponse) res.status(204).json("An error occurred");
    const data = clientResponse.items;
    return res.status(200).json(data)
}

export default {
    getPosts,
}