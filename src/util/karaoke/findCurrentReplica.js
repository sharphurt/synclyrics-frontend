export const findCurrentReplica = (replicas, time) => {
    return replicas.find(replicaTiming => replicaTiming.startMs >= time)
}