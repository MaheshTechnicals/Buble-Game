let time = 60;
let score = 0;
let newhit = 0;
let mkbuble = () => {

  for (var i = 0; i < 30; i++) {
    let rn = Math.floor(Math.random() * 10)
    newhit = rn
    let a = `<div class="bubule">${rn}</div>`
    document.querySelector("#bublebox").innerHTML += a
  }
}

let hitgen = () => {

  let hitnumber = Math.floor(Math.random() * 10)

  document.querySelector("#hit").textContent = newhit

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

    let hit = document.querySelector("#hit").textContent


    if (Number(hit) == Number(e.target.textContent)) {
      score += 10
      let scorecount = document.querySelector("#score").textContent = score
      document.querySelector("#bublebox").innerHTML = ""
      mkbuble()
      hitgen()
    }
    else {
      score -= 10
      let scorecount = document.querySelector("#score").textContent = score
      document.querySelector("#bublebox").innerHTML = ""
      mkbuble()
      hitgen()
    }



  })


}






mkbuble()
hitgen()
timer()
allbtn()