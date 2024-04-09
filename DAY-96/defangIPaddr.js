function defangIPaddr(address) {
    return address.split('.').join('[.]');
}

console.log(defangIPaddr("1.1.1.1")) //"1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")) //"255[.]100[.]50[.]0"