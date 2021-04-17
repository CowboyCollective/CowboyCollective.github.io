let backgroundColors = [
  "rgb(072, 055, 055)",
  "rgb(255, 042, 042)",
  "rgb(200, 113, 055)",
  "rgb(128, 051, 000)",
  "rgb(222, 135, 135)",
  "rgb(000, 000, 128)",
  "rgb(160, 044, 044)",
  "rgb(255, 102, 000)",
  "rgb(200, 190, 183)",
  "rgb(108, 083, 083)",
  "rgb(172, 147, 147)",
  "rgb(255, 153, 085)",
  "rgb(200, 055, 055)",
  "rgb(255, 128, 128)",
  "rgb(128, 000, 000)",
]

let months = [
  "",
  "January ",
  "February ",
  "March ",
  "April ",
  "May ",
  "June ",
  "July ",
  "August ",
  "September ",
  "October ",
  "November ",
  "December ",
]

function nameSort( a, b ) {
  if ( a[2] < b[2] ){
    return -1;
  }
  if ( a[2] > b[2] ){
    return 1;
  }
  return 0;
}

function yearSort( a, b ) {
  if ( a[0] < b[0] ){
    return -1;
  }
  if ( a[0] > b[0] ){
    return 1;
  }
  return 0;
}

function getEmbed(i) {
  i = i.replace(/\/download\//g, "/embed/").split("/").slice(0, -1).join("/") + "?ui=embed#mode/2up/"
  return i
}

function getCover(i) {
  if (i.length == 5) {
    i = i[4].split("/").slice(0, -1).join("/") + "/__ia_thumb.jpg"
    return i
  }
  else {
    return i[5]
  }
}

function getCoverII(i) {
  i = i[4].replace(/.pdf/g, "")
  i = i + "_jp2.zip/" + i.split("/")[5] + "_jp2/" + i.split("/")[5] + "_0000.jp2&ext=jpg"
  return i
}

function createTitle(i){
  let book = document.createElement("h1")
  book.innerHTML = i
  document.getElementById("body").appendChild(book)
}

function createBook(i){
  let book = document.createElement("div")
  book.className = "book"
  book.style = "background-color: " + backgroundColors[parseInt(Math.random() * backgroundColors.length)] + ";" + "background-image: url('" + getCover(comics[i]) + "');"
  book.onmouseover = function(){
    document.getElementById("footer").style.visibility = "visible"
    document.getElementById("bookTitle").innerHTML = comics[i][2]
    document.getElementById("titleII").innerHTML = comics[i][2]
    document.getElementById("bookDate").innerHTML = months[comics[i][1]] + comics[i][0]
    document.getElementById("bookNumb").innerHTML = comics[i][3]
  }
  book.onclick = function(){
    document.getElementById("footer").style.visibility = "hidden"
    document.getElementById("preview").style.visibility = "visible"
    document.getElementById("book").src = getEmbed(comics[i][4])
    document.getElementById("clicker").onclick = function(){ window.open(comics[i][4]) }
  }
  document.getElementById("body").appendChild(book)
}

function createEnder(){
  for(let i=0; i < 5; i++){
    let end = document.createElement("div")
    end.className = "ender"
    document.getElementById("body").appendChild(end)
  }
}

function exit(){
  document.getElementById("preview").style.visibility = "hidden"
  document.getElementById("book").src = "loading.html"
}

function sortDate(){
  comics.sort(yearSort)
  document.getElementById("body").innerHTML = ""
  document.getElementById("date").style = "font-weight: bold;"
  document.getElementById("title").style = "font-weight: regular;"
  let year = 0000
  for(let i=0; i < comics.length; i++){
    if (year == comics[i][0]) {
      createBook(i)
    }
    else {
      year = comics[i][0]
      createEnder()
      createTitle(year)
      createBook(i)
    }
  }
}

function sortTitle(){
  comics.sort(nameSort)
  document.getElementById("body").innerHTML = ""
  document.getElementById("date").style = "font-weight: regular;"
  document.getElementById("title").style = "font-weight: bold;"
  let title = "0000"
  for(let i=0; i < comics.length; i++){
    if (title == comics[i][2]) {
      createBook(i)
    }
    else {
      title = comics[i][2]
      createEnder()
      createTitle(title)
      createBook(i)
    }
  }
}

sortDate()
