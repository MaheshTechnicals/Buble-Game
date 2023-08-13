let time = 60;
let score = 0;

let mkbuble = () => {

  for (var i = 0; i < 30; i++) {
    let rn = Math.floor(Math.random() * 10)
    let a = `<div class="bubule">${rn}</div>`
    document.querySelector("#bublebox").innerHTML += a
  }
}

let hitgen = () => {

  let hitnumber = Math.floor(Math.random() * 10)

  document.querySelector("#hit").textContent = hitnumber

}


let timer = () => {
  let setTime = setInterval(() => {
    time--

    if (time == 0) {
      clearInterval(setTime)
      document.querySelector("#bublebox").innerHTML = `<h2>Your Score = ${score}`
    }
    document.querySelector("#timer").textContent = time

  }, 1000)

}

let allbtn = () => {
  let button = document.querySelector("#bublebox")
  button.addEventListener("click", (e) => {

    console.log(Number(e.target.textContent))

  })





}






hitgen()
mkbuble()
timer()
allbtn()