export class Question {
    tags: string[];
    owner: {
        reputation: number,
        user_id: number,
        user_type: string,
        accept_rate: number,
        profile_image: string,
        display_name: string,
        link: string,
    };
    is_answered: boolean;
    view_count: number;
    favorite_count: number;
    down_vote_count: number;
    up_vote_count: number;
    answer_count: number;
    score: number;
    last_activity_date: number;
    creation_date: number;
    last_edit_date: number;
    question_id: number;
    link: string;
    title: string;
    body: string;

    constructor(body: any) {
        this.tags = body.tags;
        this.owner = body.owner;
        this.is_answered = body.is_answered;
        this.view_count = body.view_count;
        this.favorite_count = body.favorite_count;
        this.down_vote_count = body.down_vote_count;
        this.up_vote_count = body.up_vote_count;
        this.answer_count = body.answer_count;
        this.score = body.score;
        this.last_activity_date = body.last_activity_date;
        this.creation_date = body.creation_date;
        this.last_edit_date = body.last_edit_date;
        this.question_id = body.question_id;
        this.link = body.link;
        this.title = body.title;
        this.body = body.body;
      }
}