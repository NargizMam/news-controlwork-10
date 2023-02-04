export interface News {
    id: number,
    title: string,
    description: string,
    image?: string | null,
    dateStart: string
}
export interface ApiNews {
    title: string,
    description: string,
    image?: string | null,
}
export interface Comment {
    id: number,
    news_id: number,
    authors: string,
    text: string,
}
export interface ApiComment {
    news_id: number,
    authors: string,
    text: string,
}
