let input = document.getElementById('display_input')
let output = document.getElementById('display_output')
let tmp = ''


const clearDisplay = function () {
    input.textContent = ''
    output.textContent = ''
    tmp = ''
}


const deleteDisplay = function () {
    tmp = tmp.slice(0, -1)
    input.textContent = tmp
}

const addDisplay = function (value) {
    tmp = tmp.concat(value)
    input.textContent = tmp
}


const calculator = function () {

    function fixEval() {
        let imposibleValues = ['+', '-', '*', '/', undefined]

        function checkError(pre, cur, next) {
            if (cur === '0' && imposibleValues.some(value => value === pre) && next !== '.')
                return true
            return false
        }

        let length = tmp.length
        for (let i = 0; i < length; i++) {
            if (checkError(tmp[i - 1], tmp[i], tmp[i + 1])) {
                tmp = tmp.slice(0, i) + tmp.slice(i + 1, length)
            }
        }
    }
    fixEval()


    try {
        output.textContent = eval(tmp).toString()
    }
    catch (error) {

        output.textContent = 'Syntax Error'
    }
}

