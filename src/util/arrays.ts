export function chunks<T>(array: T[], chunkCount: number): T[][] {
    const results: T[][] = []
    for (let i = 0; i < chunkCount; i++) {
        results.push([])
    }

    let counter = 0;
    while (array.length) {
        results[counter % chunkCount].push(array.shift()!)
        counter++
    }
    return results
}

