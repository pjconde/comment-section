export class CommentDto {
    id!: number
    name!: string
    created!: string
    message!: string
}

export class PostDto {
    id!: number
    title!: string
    comments!: CommentDto[]
}
