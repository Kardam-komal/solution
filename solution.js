function sortAndCount( n, arr ) {
    let sorted = arr.sort( (a,b) => a - b);
    let pairs = 0;

    for (let i = 0; i < n -1 ; i++) {
        if ( sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }

    return pairs;
}

function rohitSocks(n, ar) {
    const colors = {}
    let pairs = 0;
    for (const color of ar)
        if (colors[color]) {
            colors[color] = 0;
            pairs += 1;
        } else {
            colors[color] = 1;
        }

    return pairs;
}

const n = 17;
const socks = [10, 10, 10, 10, 20, 30, 30, 30, 30, 30, 30, 30, 40 ,40 ,40 ,40 ,40];

console.group('Sorted and counted');
    console.log(`Rohit can sell ${rohitSocks(n, socks)} pairs`);
console.groupEnd();