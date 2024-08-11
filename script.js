  let ua1 = document.getElementById("upArrowOne");
  let ua2 = document.getElementById("upArrowTwo");
  let da1 = document.getElementById("downArrowOne");
  let da2 = document.getElementById("downArrowTwo");
  let company = document.getElementById("company");
  let cc = document.getElementById("companyclick");
  let features = document.getElementById("features");
  let featuresclik = document.getElementById("featuresClick");
  let navclose = document.getElementById("navclose");
  let movailnav = document.getElementById("movailnav");
  let navIcon = document.getElementById("navIcon");
  let movailNavBg = document.getElementById("bg");
  company.addEventListener("click",()=>{
    cc.classList.toggle("hidden");
    da2.classList.toggle("hidden");
    ua2.classList.toggle("hidden");
  })
  features.addEventListener("click",()=>{
    featuresclik.classList.toggle("hidden");
    da1.classList.toggle("hidden");
    ua1.classList.toggle("hidden");
  })
  navclose.addEventListener("click",()=>{
    movailnav.classList.toggle("hidden")
    movailNavBg.classList.toggle("hidden")

  })
  navIcon.addEventListener("click",()=>{
    movailnav.classList.toggle("hidden")
    movailNavBg.classList.toggle("hidden")
  })
