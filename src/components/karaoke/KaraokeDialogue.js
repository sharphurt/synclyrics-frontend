import './KaraokeDialogue.sass'
import {findCurrentReplica} from "../../util/karaoke/findCurrentReplica";
import {calculateReplicaStartTimings} from "../../util/karaoke/calculateReplicaTimings";

export const KaraokeDialogue = (props) => {

    if (!props.isCurrent) {
        return <div key={props.index} className='dialogue'>
            {props.dialogue.replicas.map((item, index) => {
                return <span className='replica' key={index}>
                {item.text ?? ''}
            </span>
            })}
        </div>
    }


    const replicaTimings = calculateReplicaStartTimings(props.dialogue)
    const currentReplica = findCurrentReplica(replicaTimings, props.time)

    return <div key={props.index} className='dialogue'>
        {props.dialogue.replicas.map((item, index) => {
            return <span className={`replica ${index === currentReplica?.index ? 'current-replica' : ''}`} key={index}>
                {item.text ?? ''}
            </span>
        })}
    </div>
}