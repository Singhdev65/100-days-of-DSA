function isIsomorphic(s, t) {
  if (s.length !== t.length) return false

  let objStoT = {}
  let objTtoS = {} 

  for (let i = 0; i < s.length; i++) {
    const charS = s[i]
    const charT = t[i]

    if (!objStoT[charS]) {
      objStoT[charS] = charT
    } else {
      if (objStoT[charS] !== charT) {
        return false
      }
    }

    if (!objTtoS[charT]) {
      objTtoS[charT] = charS
    } else {
      if (objTtoS[charT] !== charS) {
        return false
      }
    }
  }

  return true
}

console.log(isIsomorphic("badc", "baba")) // false
