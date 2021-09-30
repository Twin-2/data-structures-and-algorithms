'use strict';

function leftJoin(hash1, hash2) {
    for (let i = 0; i < hash1.map.length; i++) {
        let current = (hash1.map[i] ? hash1.map[i].head : null)
        while (current) {
            let keyValuePair = current.value
            let key = Object.keys(keyValuePair)[0]
            if (hash2.contains(key)) {
                let hash2Value = hash2.get(key);
                current.value[key] = `${current.value[key]}, ${hash2Value}`;
            }
            current = current.next
        }
    }

    return hash1
};

module.exports = leftJoin;