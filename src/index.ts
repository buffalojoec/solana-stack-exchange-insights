import express from "express"
import questionService from "./service/questions"
import postsService from "./service/posts"

const port = 3002;
const app = express();

const req = (route: string, service: (req, res, endpoint?: string) => Promise<any>, endpoint?: string) => 
    app.get(route + (endpoint === undefined ? '' : endpoint), async (req, res) => service(req, res, endpoint));

const questions = async (endpoint?: string) => req('/questions', questionService.getQuestions, endpoint);
questions();
questions('/no-answers')
questions('/unanswered')

const posts = async (endpoint?: string) => req('/posts', postsService.getPosts, endpoint);
posts();

app.listen(port, () => {
    console.log();
    console.log(`Service launched.`)
    console.log(`   Listening on port ${port}...`)
});