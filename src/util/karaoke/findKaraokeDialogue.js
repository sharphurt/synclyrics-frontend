export const findKaraokeDialogues = (dialogues, time) => {
    return dialogues.filter(dialogue => time >= dialogue.startMs && time <= dialogue.endMs).map(dialogue => dialogue.index)
}