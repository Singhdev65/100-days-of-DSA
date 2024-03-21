var simplifyPath = function(path) {
    const arr = [];
    const paths = path.split('/');
    
    for (const _path of paths) {
        if (_path === '..') {
            arr.pop();
        } else if (_path && _path !== '.') {
            arr.push(_path);
        }
    }
    
    return '/' + arr.join('/');
};

console.log(simplifyPath("/home/")); // "/home"
console.log(simplifyPath("/../")); // "/"
console.log(simplifyPath("/home//foo/")); // "/home/foo"
