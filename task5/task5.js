
function findFirstRepeatedLocation(instructions) {
    let x = 0, y = 0;
    let direction = 'N';
    const visited = new Set(['0,0']);

    for (let i = 0; i < instructions.length; i++) {
        const inst = instructions[i];
        const turn = inst[0];
        const blocks = parseInt(inst.slice(1), 10);

        if (turn === 'R') {
            direction = direction === 'N' ? 'E' : direction === 'E' ? 'S' : direction === 'S' ? 'W' : 'N';
        } else {
            direction = direction === 'N' ? 'W' : direction === 'W' ? 'S' : direction === 'S' ? 'E' : 'N';
        }

        for (let j = 0; j < blocks; j++) {
            if (direction === 'N') y++;
            else if (direction === 'E') x++;
            else if (direction === 'S') y--;
            else if (direction === 'W') x--;

            const pos = `${x},${y}`;
            if (visited.has(pos)) {
                return Math.abs(x) + Math.abs(y);
            }
            visited.add(pos);
        }
    }

    return 'Null';
}

const instructions = [
    'L1', 'L3', 'L5', 'L3', 'R1', 'L4', 'L5', 'R1', 'R3', 'L5', 'R1', 'L3', 'L2', 'L3', 'R2', 'R2',
    'L3', 'L3', 'R1', 'L2', 'R1', 'L3', 'L2', 'R4', 'R2', 'L5', 'R4', 'L5', 'R4', 'L2', 'R3', 'L2',
    'R4', 'R1', 'L5', 'L4', 'R1', 'L2', 'R3', 'R1', 'R2', 'L4', 'R1', 'L2', 'R3', 'L2', 'L3', 'R5',
    'L192', 'R4', 'L5', 'R4', 'L1', 'R4', 'L4', 'R2', 'L5', 'R45', 'L2', 'L5', 'R4', 'R5', 'L3', 'R5',
    'R77', 'R2', 'R5', 'L5', 'R1', 'R4', 'L4', 'L4', 'R2', 'L4', 'L1', 'R191', 'R1', 'L1', 'L2',
    'L2', 'L4', 'L3', 'R1', 'L3', 'R1', 'R5', 'R3', 'L1', 'L4', 'L2', 'L3', 'L1', 'L1', 'R5', 'L4',
    'R1', 'L3', 'R1', 'L2', 'R1', 'R4', 'R5', 'L4', 'L2', 'R4', 'R5', 'L1', 'L2', 'R3', 'L4', 'R2',
    'R2', 'R3', 'L2', 'L3', 'L5', 'R3', 'R1', 'L4', 'L3', 'R4', 'R2', 'R2', 'R2', 'R1', 'L4', 'R4',
    'R1', 'R2', 'R1', 'L2', 'L2', 'R4', 'L1', 'L2', 'R3', 'L3', 'L5', 'L4', 'R4', 'L3', 'L1', 'L5',
    'L3', 'L5', 'R5', 'L5', 'L4', 'L1', 'R1', 'L2', 'L4', 'L2', 'L4', 'L1', 'R4', 'R4', 'R5', 'R1',
    'L4', 'R2', 'L3', 'L2', 'L4', 'R2', 'L4', 'L1', 'L2', 'R1', 'R4', 'R3', 'R2', 'R2', 'R5', 'L1',
    'L2'
];
console.log(findFirstRepeatedLocation(instructions));
