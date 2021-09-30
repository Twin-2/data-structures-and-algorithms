'use strict';

function leftJoin(hash1, hash2) {
    let results = []
    for (let i = 0; i < hash1.map.length; i++) {
        let current = (hash1.map[i] ? hash1.map[i].head : null)
        while (current) {
            let keyValuePair = current.value
            let key = Object.keys(keyValuePair)[0]
            if (hash2.contains(key)) {
                results.push([key, hash1.get(key), hash2.get(key)])
            }
            else { results.push([key, hash1.get(key)]) }
            current = current.next
        }
    }

    return results
};

module.exports = leftJoin;