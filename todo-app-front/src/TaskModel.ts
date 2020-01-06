export interface ITask {
    id: number
    title: string
    completed: boolean
    deleted: boolean
    estimateDate?: Date | null
}