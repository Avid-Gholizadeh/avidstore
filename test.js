function recognizeFristUniqueChar(s) {
    const map = {}

    for (let char of s) {
        map[char] = (map[char] || 0) + 1
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return 1
        }
    }

    return -1
}
// recognizeFristUniqueChar()

function recognizeFristUniqueChar2(s) {
    const map = new Map()

    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1)
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return 1
        }
    }
    return -1
}
// recognizeFristUniqueChar2()

function uniqueChar(s) {
    const map = new Map()

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    for (const char of s) {
        if (map.get(char) === 1) return char
    }

    return -1
}
console.log(uniqueChar('fsdfgdlkkkkkllgsd'))

function firstUniqueChar(s) {
    for (let i = 0; i < s.length; i++) {
        let isUnique = true
        for (let j = 0; j < s.length; j++) {
            if (i !== j && s[i] === s[j]) {
                isUnique = false
                break // No need to check further
            }
        }
        if (isUnique) {
            return s[i]
        }
    }
    return -1 // If no unique character is found
}

firstUniqueChar()
