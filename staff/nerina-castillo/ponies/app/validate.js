const USERNAME_REGEX = /^(?!.*\s{2})[a-zA-Z0-9._-]{4,16}$/
const NAME_REGEX = /^(?!.*\s{2})[a-zA-Z ]{3,16}$/
const EMAIL_REGEX = /^[a-z0-9._]+@[a-z0-9.-]{3,63}\.[a-z]{2,10}$/

function validateString(value, explain = 'value') {
    if (typeof value !== 'string') throw new TypeError(`${explain} is not a string`)
}

function validateCallback(callback, explain = 'callback') {
    if (typeof callback !== 'function') throw new TypeError(`${explain} is not a function`)
}

function validateObject(object, explain = 'object') {
    if (object === null || typeof object !== 'object' || object.constructor !== Object) throw new TypeError(`${explain} is not an object`)
}

function validateUsername(username) {
    validateString(username, 'username')
    if (!USERNAME_REGEX.test(username)) throw new SyntaxError('invalid username')
}

function validatePassword(password) {
    validateString(password, 'password')
    if (password.trim().length < 8) throw new RangeError('password length is lower than 8 characters')
    if (password.includes(' ')) throw new SyntaxError('password has empty spaces')
}

function validateRepeatPassword(passwordRepeat){
    validateString(passwordRepeat, 'repeat password')
    if(passwordRepeat.trim().length < 8) throw new RangeError('password length is lower than 8 characters')
    if(passwordRepeat.includes(' ')) throw new SyntaxError('password has empty spaces')
    if(passwordRepeat !== password) throw new SyntaxError('passwords do not match')
}

function validateName(name, explain = 'name') {
    validateString(name, explain)
    if (!NAME_REGEX.test(name)) throw new SyntaxError(`invalid ${explain}`)
}

function validateSurname(surname, explain ='surname'){
    validateString(surname, explain)
    if(!NAME_REGEX.test(surname)) throw new SyntaxError(`invalid ${explain}`)
}

function validateEmail(email) {
    validateString(email, 'email')
    if (!EMAIL_REGEX.test(email)) throw new SyntaxError(`invalid ${email}`)
}


const validate = {
    callback: validateCallback,
    object: validateObject,
    username: validateUsername,
    password: validatePassword,
    passwordRepeat: validateRepeatPassword,
    name: validateName,
    surname: validateSurname,
    email: validateEmail
}

export default validate