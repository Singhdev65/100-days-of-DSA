function interpret(command) {
    let result = '';
    let i = 0;
    
    while (i < command.length) {
        if (command[i] === 'G') {
            result += 'G';
            i++;
        } else if (command[i] === '(' && command[i + 1] === ')') {
            result += 'o';
            i += 2;
        } else if (command.substring(i, i + 4) === "(al)") {
            result += 'al';
            i += 4;
        }
    }
    
    return result;
}

console.log(interpret("G()(al)")); // Goal
console.log(interpret("G()()()()(al)")); // Gooooal
console.log(interpret("(al)G(al)()()G")); // alGalooG
