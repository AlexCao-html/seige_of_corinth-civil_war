document.querySelector("#open-nav").addEventListener("click", () => {
    document.querySelector("nav").classList.add("open");
    var sections = document.querySelectorAll("main > section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add("openNav");
    }
});
document.querySelector("#close-nav").addEventListener("click", () => {
    document.querySelector("nav").classList.remove("open");
    var sections = document.querySelectorAll("main > section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("openNav");
    }
});
document.querySelector("#openLeaders").addEventListener("click", () => {
    document.querySelector("#leaders").classList.toggle("open");
    document.querySelector("#troops").classList.remove("open");
    document.querySelector("#timeline").classList.remove("open");
    document.querySelector("#bibliography").classList.remove("open");
    document.querySelector("html").classList.remove("noYscroll");
});
document.querySelector("#openTroops").addEventListener("click", () => {
    document.querySelector("#leaders").classList.remove("open");
    document.querySelector("#troops").classList.toggle("open");
    document.querySelector("#timeline").classList.remove("open");
    document.querySelector("#bibliography").classList.remove("open");
    document.querySelector("html").classList.remove("noYscroll");
});
document.querySelector("#openTimeline").addEventListener("click", () => {
    document.querySelector("#leaders").classList.remove("open");
    document.querySelector("#troops").classList.remove("open");
    document.querySelector("#timeline").classList.toggle("open");
    document.querySelector("#bibliography").classList.remove("open");
    document.querySelector("html").classList.add("noYscroll");
});
document.querySelector("#openBibliography").addEventListener("click", () => {
    document.querySelector("#leaders").classList.remove("open");
    document.querySelector("#troops").classList.remove("open");
    document.querySelector("#timeline").classList.remove("open");
    document.querySelector("#bibliography").classList.toggle("open");
    document.querySelector("html").classList.remove("noYscroll");
});
var tpt1 = document.querySelectorAll(".tpt1");
for (var i = 0; i < tpt1.length; i++) {
    tpt1[i].addEventListener("click", () => {
        document.querySelector("#timeline").classList.add("pt1");
        document.querySelector("#timeline").classList.remove("pt2");
        document.querySelector("#timeline").classList.remove("pt3");
    });
}
var tpt2 = document.querySelectorAll(".tpt2");
for (var i = 0; i < tpt2.length; i++) {
    tpt2[i].addEventListener("click", () => {
        document.querySelector("#timeline").classList.remove("pt1");
        document.querySelector("#timeline").classList.add("pt2");
        document.querySelector("#timeline").classList.remove("pt3");
    });
}
var tpt3 = document.querySelectorAll(".tpt3");
for (var i = 0; i < tpt3.length; i++) {
    tpt3[i].addEventListener("click", () => {
        document.querySelector("#timeline").classList.remove("pt1");
        document.querySelector("#timeline").classList.remove("pt2");
        document.querySelector("#timeline").classList.add("pt3");
    });
}
new Chart("troopsChart", {
  type: "doughnut",
  data: {
    labels: ["Union", "Confederate"],
    datasets: [{
      backgroundColor: ["#2b5796", "#b91d46"],
      data: [100000, 70000]
    }]
  },
  options: {
    title: {
      display: true,
      text: "Troops"
    }
  }
});
new Chart("casualtiesChart", {
  type: "doughnut",
  data: {
    labels: ["Union", "Confederate"],
    datasets: [{
      backgroundColor: ["#2b5796", "#b91d46"],
      data: [1000, 1000]
    }]
  },
  options: {
    title: {
      display: true,
      text: "Casualties"
    }
  }
});