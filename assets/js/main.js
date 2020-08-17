// Intro parallax -------------------------------------------------------------------------------------
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

//Scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top-navigation-bar").style.top = "0";
  } else {
    document.getElementById("top-navigation-bar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


//About me-------------------------------------------------------------------------------------
const clearContent = () => {
    container.innerHTML = ""
}

const appendInformation = (list, infoList, categoryName) => {
    for(let i = 0 ; i < infoList.length; i++){
        console.log(infoList[i])
        let item = document.createElement("li")
        item.className = categoryName
        item.textContent = infoList[i]
        list.appendChild(item)
    }
}   

var container = document.getElementById("container")

var hobbyCategory = document.getElementById('hobbies');
clearContent()
const newList = ["Singing with friends", "Reading thriller mysteries and webtoons", "Playing the ukelele", "Drawing (both traditionally and digitally)"]
const hobbyList = document.createElement("ul")
hobbyList.className = "hobby-list"
appendInformation(hobbyList, newList, "hobby" )
container.appendChild(hobbyList)

hobbyCategory.addEventListener("click", () => {
    clearContent()
    let newList = ["Singing with friends", "Reading thriller mysteries and webtoons", "Playing the ukelele", "Drawing (both traditionally and digitally)"]
    let hobbyList = document.createElement("ul")
    hobbyList.className = "hobby-list"
    appendInformation(hobbyList, newList, "hobby" )
    container.appendChild(hobbyList)
});

var interestsCategory = document.getElementById('interests');
interestsCategory.addEventListener("click", function(){
    console.log("clicked onthe interests")
    clearContent()
    let newList = ["Astronomy", "Oceanography/Marine life", "Neomorphic design", "Architecture"];
    let interestList = document.createElement("ul")
    interestList.className = "interest-list"
    appendInformation(interestList, newList, "interest" )
    container.appendChild(interestList)
    
});

var educationCategory = document.getElementById('education');
educationCategory.addEventListener("click", function(){
    console.log("clicked onthe education")
    clearContent()
    let newList = ["Rutgers University - New Brunswick", "Computer Science Major", "Visual Arts Minor", "Sept 2018 - May 2022"];
    let educationList = document.createElement("ul")
    educationList.className = "education-list"
    appendInformation(educationList, newList, "education" )
    container.appendChild(educationList)
    
});

var techCategory = document.getElementById('technology');
techCategory.addEventListener("click", function(){
    console.log("clicked onthe tech")
    clearContent()
    let newList = ["JavaScript", "Kotlin", "React", "HTML & CSS", "C", "Photoshop", "Blender", "Unity",  ];
    let techList = document.createElement("ul")
    techList.className = "tech-list"
    appendInformation(techList, newList, "tech" )
    container.appendChild(techList)
    
});


//Experience -------------------------------------------------------------------------------------

for(let i=1; i <= 4; i++){
    let rootStr = "time-"+i.toString()
    let experience = document.getElementById(rootStr)
    if(experience == null) console.log("null")
    else {
        console.log(rootStr)
        experience.addEventListener("mouseover", () => {
            const expChildren = experience.children
            for(let j = 0; j < expChildren.length; j++){
                expChildren[j].setAttribute("style", "color: var(--highlight-color);")
            }
        })
        experience.addEventListener("mouseout", () => {
            const expChildren = experience.children
            for(let j = 0; j < expChildren.length; j++){
                expChildren[j].setAttribute("style", "color: var(--paragraph-color);")
            }
        })
    }
}