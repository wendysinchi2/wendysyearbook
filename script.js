let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")

let students = [
     {
profileImage: "https://cdn.glitch.com/e71b2e03-23c8-4374-b0ec-a420c3fc00d6%2FIMG_0764.JPG?v=1586143324540",
name: "Keiry Martinez",
quote:"I need to bring up these gradess",
superlative:"math queen"
  },


    {
profileImage: "https://cdn.glitch.com/e71b2e03-23c8-4374-b0ec-a420c3fc00d6%2FIMG_0770.JPG?v=1586144097715",
name:"Yunaivi Rosa",
quote:"baby girl you look so cute",
superlative:"best compliment giver"
  },
  
    {
profileImage: "https://cdn.glitch.com/e71b2e03-23c8-4374-b0ec-a420c3fc00d6%2FIMG_0772.jpg?v=1586143362016",
name:"Lisandro (cilantro)",
quote:"i love soup with... you guessed it",
superlative:"a bully for no reason"
  },
  
    {
profileImage: "https://cdn.glitch.com/e71b2e03-23c8-4374-b0ec-a420c3fc00d6%2FIMG_0773.jpg?v=1586143341050",
name:"Nancy Martinez",
quote:"want me to crack your back?! :)",
superlative:"future chiropactor and a sweetheart"
  },
  
    {
profileImage: "https://cdn.glitch.com/e71b2e03-23c8-4374-b0ec-a420c3fc00d6%2FIMG_0774.jpg?v=1586143365498",
name:"Wesley Delosantos",
quote:"hahahahaha",
superlative:"loudest laugh "
  },
  
    {
profileImage: "https://cdn.glitch.com/e71b2e03-23c8-4374-b0ec-a420c3fc00d6%2FIMG_0775.jpg?v=1586143344066",
name:"Ruth Sinchi (sister)",
quote:"what the heck!",
superlative:"mean little girl"
  },
  
    {
profileImage: "https://cdn.glitch.com/e71b2e03-23c8-4374-b0ec-a420c3fc00d6%2FIMG_0771.jpg?v=1586143300917",
name:"Cecilia Blanco (Cece)",
quote:"i need to put you on",
superlative:"queen of chisme"
  },
      {
profileImage: "https://cdn.glitch.com/e71b2e03-23c8-4374-b0ec-a420c3fc00d6%2FImage-1%20(1).jpg?v=1586144090964",
name:"Wendy (me!)",
quote:"i'll talk to you but only on instagram :)",
superlative:"I love makeup art"
  },
 

]
 let count = 0
document.querySelector("#pic").src = students[count].profileImage
document.querySelector("#name").innerHTML= students[count].name
document.querySelector("#quote").innerHTML= students[count].quote
document.querySelector("#superlative").innerHTML= students[count].superlative
let lastStudent = students.length -1

 
 
 

nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  
   console.log(count)
  if (count > lastStudent){
    count=0}
  
  
  
  
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML= students[count].name
  document.querySelector("#quote").innerHTML= students[count].quote
  document.querySelector("#superlative").innerHTML= students[count].superlative
  
  
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML= students[count].name
  document.querySelector("#quote").innerHTML= students[count].quote
  document.querySelector("#superlative").innerHTML= students[count].superlative
  
})