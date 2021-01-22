export type CodeCellMoveType = 'up' | 'down'
export interface CodeCell {
    id: string
    content: string
    init: boolean
    title: string
    description: string
}

export interface CodeCellInfo {
    id: string | null
    title: string
    description: string
}