export default interface Task {
    id: number
    title: string
    note?: string
    estimateEndDateTime?: Date
    completed: boolean
}