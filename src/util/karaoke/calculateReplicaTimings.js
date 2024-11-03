export const calculateReplicaStartTimings = (dialogue) => {
    let accumulator = dialogue.startMs
    const result = []

    dialogue.replicas.forEach((replica, index) => {
        result.push({
            index: index,
            startMs: accumulator,
            ...replica
        })
        accumulator += replica.durationMs
    })

    return result
}