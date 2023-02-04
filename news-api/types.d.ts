export interface News {
    id: number,
    title: string,
    description: string,
    image?: string | null,
    datetimeAt: string
}
export interface ApiNews {
    title: string,
    description: string,
    image?: string | null,
}