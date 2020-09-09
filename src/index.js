const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []
    let sub;
    for(let i = 0; i < expr.length; i+=2) {
      let sub1 = expr.substring(i, i+2)
      if(sub1 === "10") {
        sub = "."
      }else if(sub1 === "11") {
        sub = "-"
      }else {
        sub = ""
      }
      arr = [...arr, sub]
    }
  
    let arr2 = []
    for(let j = 0; j < arr.length; j+=5) {
      arr2.push(arr.slice(j, j+5))
    }
    arr2 = arr2.map(item => {
      item = item.join('')
      if(MORSE_TABLE.hasOwnProperty(item)) {
        item = MORSE_TABLE[item]
      }else if(item === '') {
        item = ' '
      }
      return item
    })
    return arr2.join('')
}

module.exports = {
    decode
}