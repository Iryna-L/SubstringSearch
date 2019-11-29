const inputSearch = document.getElementById("wordSearch")

const allHtml = document.getElementById('main').innerHTML
const allText = document.getElementById('main').innerText

inputSearch.onkeyup = findWord;

function findWord(e) {
  if (allText.indexOf(e.target.value) >= 0) {
    let newText = allHtml.split(e.target.value).join(`<span class="found_word">${e.target.value}</span>`)
    document.getElementById('main').innerHTML = newText
        
  } else {
    document.getElementById('main').innerHTML = allHtml
  }
}