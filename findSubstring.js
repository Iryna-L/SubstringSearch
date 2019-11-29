const inputSearch = document.getElementById("wordSearch")

const allHtml = document.getElementById('main').innerHTML
const allText = document.getElementById('main').innerText

let indexStart = -1;
let indexEnd = -1;
let tag = ''
let temporaryReplacer = ''
let tags = []
const space = "~"

while ((indexStart = allHtml.indexOf('<', indexStart + 1)) != -1) {
  indexEnd = allHtml.indexOf('>', indexEnd + 1)
  tag = allHtml.slice(indexStart, indexEnd+1)
  temporaryReplacer = space.repeat(indexEnd - indexStart + 1)
  tags.push({ tag, indexStart, indexEnd, temporaryReplacer })
}

let modifiedHtml = allHtml

let newString= " "
tags.forEach(el => {
  modifiedHtml = modifiedHtml.replace(el.tag, el.temporaryReplacer)
})

inputSearch.onkeyup = findWord;

function findWord(e) {
  if (allText.indexOf(e.target.value) >= 0 && inputSearch.value) {
    let newText = modifiedHtml.split(e.target.value).join(`<span class="found_word">${e.target.value}</span>`)
    tags.forEach(el => {
      newText = newText.replace(el.temporaryReplacer, el.tag)
    })
    document.getElementById('main').innerHTML = newText
  } else {
    document.getElementById('main').innerHTML = allHtml
  }
}