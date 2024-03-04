
const Load1 = async()=>{
     const url = `https://openapi.programming-hero.com/api/retro-forum/latest-posts`
     const res = await fetch(url)
     const data = await res.json()
     console.log(data);
     DisplayData1(data)

}
 
const DisplayData1 = (datas)=>{
     const Card = document.getElementById('card-1')
     datas.forEach(data=>{
         const div7 = document.createElement('div')
         console.log(data.author.posted_date);
         const ok = true
         div7.innerHTML = `
         <div class="card w-80 shadow-xl">
         <figure><img src="${data.cover_image}" alt="Shoes" /></figure>
         <div class="card-body">
           <h2 class="card-title">${data.author.posted_date?data.author.posted_date:"No published date"}</h2>
           <p class="font-extrabold">${data.title}</p>
           <p class="font-extralight">${data.description}</p>
           <div class="flex gap-6">
           <img src="${data.profile_image}" class="w-[50px] h-[50px] rounded-3xl " alt="">
           <div>
           <p class="font-extrabold  mt-3">${data.author.name}</p>  
           <p class="font-extralight">${data.author.designation?data.author.description : "Unkhown"}</p>
           </div>
           </div>
         </div>
       </div>
        `
        Card.appendChild(div7)
     })
}

Load1()