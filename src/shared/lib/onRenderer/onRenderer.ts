export default function onRenderer(
    id: string,
    phase: 'mount' | 'update' | 'nested-update',
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
): void {
    console.group(id);
    console.info(
        'phase:',
        phase,
        'startTime:',
        startTime,
        'commitTime:',
        commitTime,
        'baseDuration:',
        baseDuration,
        'actualDuration:',
        actualDuration
    );
    console.groupEnd();
}
