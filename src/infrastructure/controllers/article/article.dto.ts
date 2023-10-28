
export class UpdateArticleDto {
    readonly id: number;
    readonly content: string;
    readonly title: string;
}

export class AddArticleDto {
    readonly title: string;
    readonly content: string;
}
