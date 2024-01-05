function Palindrome(s){
    const string = s.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    const reverseString = string.split("").reverse().join("");

    if(string !== reverseString)  return false;

    return true
}


console.log(Palindrome("")) //true
console.log(Palindrome("race a car")) //false
console.log(Palindrome("A man, a plan, a canal: Panama")) //true
console.log(Palindrome("#% A %&  man, a plan, a canal: &&Pan&^&ama")) // true