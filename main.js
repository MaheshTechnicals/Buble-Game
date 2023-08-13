let score = 0;
let button = document.querySelector("button")
let box = document.querySelector("#bublebox")
let setTime;
let bn = 0;
let time = 60;


gsap.to("img", {
  rotate: 360,
  duration: 1.6,
  scale: 2,
})

gsap.to("h1", {
  y: 200,
  scale: 1,
  duration: 1.6,
  color: "white"

})









button.addEventListener("click", () => {
  let b4start = document.querySelector("#b4start")

  if (bn == 0) {
    bn++
    b4start.innerHTML = null
    mkbuble()
    timer()
    allbtn()
    hitgen()

  }

  else {
    bn = 0;
    location.reload()
  }




})









let mkbuble = () => {

  for (var i = 0; i < 54; i++) {
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
  
  setTime = setInterval(() => {
    time--

    if (time == 0) {
      clearInterval(setTime)
      document.querySelector("#bublebox").innerHTML = `<h2>Your Score = ${score}`
    }
    document.querySelector("#timer").textContent = time


    timeleft()



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


      if (score <= 0) {
        score = 0;
        document.querySelector("#score").textContent = score
      }



    }



  })


}


let timeleft = () => {

  if (time < 10) {
    document.querySelector("#timer").style.color = "red"
  }




}