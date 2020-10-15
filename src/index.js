module.exports = function check(str, bracketsConfig) {
    let length = str.length;
    if (length % 2 === 0) {
        let stack = [];

        let lastIndex = 0;
        for (let i = 0; i < length; i++) {

            if ((str[i] === '(' || str[i] === '{' || str[i] === '[' || str[i] === '1' || str[i] === '3' || str[i] === '5') || ((str[i] === '|') && (stack[stack.length - 1] != '|')) || ((str[i] === '7') && (stack[stack.length - 1] !== '7')) || ((str[i] === '8') && (stack[stack.length - 1] !== '8'))) {

                stack.push(str[i]);

            } else if (str[i] === ')' || str[i] === '}' || str[i] === ']' || str[i] === '|' || str[i] === '2' || str[i] === '4' || str[i] === '6' || str[i] === '7' || str[i] === '8') {
                if (stack.length) {
                    lastIndex = stack[stack.length - 1];
                    if ((str[i] === ')' && lastIndex === '(') || (str[i] === '}' && lastIndex === '{') || (str[i] === ']' && lastIndex === '[') || (str[i] === '2' && lastIndex === '1') || (str[i] === '4' && lastIndex === '3') || (str[i] === '6' && lastIndex === '5') || (str[i] === '|' && lastIndex === '|') || (str[i] === '7' && lastIndex === '7') || (str[i] === '8' && lastIndex === '8')) stack.pop();
                }
            }
        }
        return (!stack.length);
    }

    return false;
}