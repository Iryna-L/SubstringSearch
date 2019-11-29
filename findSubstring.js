const inputSearch = document.getElementById("wordSearch")

const allText = document.getElementById('main').innerHTML

inputSearch.onkeyup = findWord;

function findWord(e) {
  if (allText.indexOf(e.target.value)) {
    let newText = allText.split(e.target.value).join(`<span class="found_word">${e.target.value}</span>`)
    document.getElementById('main').innerHTML = newText
        
  } else {
    document.getElementById('main').innerHTML = allText
  }
}