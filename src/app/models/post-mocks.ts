import { PostDto, CommentDto } from "./app.dtos";

export const POST_MOCKS: PostDto[] = [
    {
        id: 1,
        title: "Week 32: Line From A Song",
        comments: []
    },
    {
        id: 2,
        title: "Week 33: Night",
        comments: []
    },
    {
        id: 3,
        title: "Week 34: Texture",
        comments: []
    },
    {
        id: 4,
        title: "Week 35: Nostalgia",
        comments: [
            {
                id: 1,
                name: "Steve",
                created: new Date().toString(),
                message: "\" 'You miss 100% of the shots you don't take.' -Wayne gretzky\" -Michael Scott"
            }
        ]
    },
];