const getAllLevel=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=>res.json())
    .then((data)=>displayLesson(data.data)
    )
};

 const loadLevelWord = (id) => {
   const url =` https://openapi.programming-hero.com/api/level/ ${id}

`;
fetch(url)
 .then((ress)=>ress.json())
 .then(data=>displayWord(data.data)
 );

 };
const displayWord=(words=>{
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML="";
   
    words.forEach(element => {
        const card=document.createElement('div');
        card.innerHTML=`
        <p>Car</p>

        `;
        wordContainer.append(card);
        
    });

});

   const displayLesson=(lessons)=>{
   
    
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML="";
  for(const element of lessons) {
   const div=document.createElement("div");
   div.innerHTML = `
   <button onclick="loadLevelWord(${element.level_no})" class="btn btn-outline btn-primary"> <i class="fa-brands fa-leanpub"></i></i>Lesson-${element.level_no}</button>
   `;
   levelContainer.append(div);
    
  };

   };
   getAllLevel();
  