// addItem -- generic method
export function addItem<T>(array: T[], item: T): T[] {
    return [...array, item];
}
