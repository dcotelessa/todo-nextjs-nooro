export const COLORS = [
    { id: 1, name: 'task-red', hex: 'var(--task-red)' },
    { id: 2, name: 'task-orange', hex: 'var(--task-orange)' },
    { id: 3, name: 'task-yellow', hex: 'var(--task-yellow)' },
    { id: 4, name: 'task-green', hex: 'var(--task-green)' },
    { id: 5, name: 'task-blue', hex: 'var(--task-blue)' },
    { id: 6, name: 'task-indigo', hex: 'var(--task-indigo)' },
    { id: 7, name: 'task-purple', hex: 'var(--task-purple)' },
    { id: 8, name: 'task-pink', hex: 'var(--task-pink)' },
    { id: 9, name: 'task-brown', hex: 'var(--task-brown)' },
] as const;

export type ColorType = typeof COLORS[number];