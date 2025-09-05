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
 .then(data=>{
    remove();
    const clickBtn = document.getElementById(`level-btn-${id}`);
    clickBtn.classList.add('active');
  
    displayWord(data.data);
 }
 );

  const remove=()=>{
    const allButton=document.querySelectorAll(".lesson-btn");
    allButton.forEach((btn)=>btn.classList.remove('active'));
  };

 };








const displayWord=(words=>{
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML="";
    if(words.length===0){
        wordContainer.innerHTML = `
        <div class="text-center col-span-full space-y-5 font-bangla">
          <div class="flex justify-center"><img src="assets/alert-error.png" alt=""></div>
  <p class="">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি। </p>
  <h1 class="text-3xl font-bold">নেক্সট Lesson এ যান </h1>

</div>

        `;
        return;
    }
   
    words.forEach(element => {
       
        
       
        const card=document.createElement('div');
        card.innerHTML = `
        <div class="bg-white py-10 px-5 rounded-xl text-center space-y-4" >
      <h2 class="font-bold text-xl">${
        element.word ? element.word : "সব্দ পাওয় যায়নি"
      }</h2>
      <p class="font-semibold"> Meaning  / pronunciation</p>
      <h2  class="text-2xl font-semibold font-bangla">${
        element.meaning ? element.meaning : "অর্থ পাওয়া যায়নি"
      } / ${
          element.pronunciation
            ? element.pronunciation
            : "pronunciation not found"
        }</h2>
      <div class="flex justify-between items-center">
        <button class="btn bg-[#1a91ff1a] hover:bg-[#117ee3da]"><i class="fa-solid fa-circle-info"></i></button>
        <button class="btn bg-[#1a91ff1a] hover:bg-[#117ee3da]"><i class="fa-solid fa-volume-high"></i></button>
      </div>
    </div>

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
   <button id="level-btn-${element.level_no}" onclick="loadLevelWord(${element.level_no})" class="btn btn-outline btn-primary lesson-btn"> <i class="fa-brands fa-leanpub"></i></i>Lesson-${element.level_no}</button>
   `;
   levelContainer.append(div);
    
  };

   };
   getAllLevel();
  