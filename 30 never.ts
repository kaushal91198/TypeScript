

// error comes we can put type never
function tryReturn(msg, code): never {
    throw { msg: msg, code: code }
}


tryReturn("eroor", 500)