

const Load = async(str = "")=>{
   console.log('hi');
   const url = ` https://openapi.programming-hero.com/api/retro-forum/posts?category=${str}`
   const res = await fetch(url)
   const data = await res.json()
   console.log(data.posts);
    DisplayData(data.posts)
}

const DisplayData = (datas)=>{
    toggleSpinner(true)
    setTimeout(()=>{
       toggleSpinner(false)
    },2000)
    const div1 = document.getElementById('div1')
setTimeout(()=>{
    datas.forEach(data=>{
        const div = document.createElement('div')
         div.innerHTML = `
         <div class="lg:flex bg-gray-200 ml-5 lg:ml-4 mt-2">
         <img src="${data.image}" class="w-[150px] h-[150px] lg:p-4" alt="">
       <div class="lg:ml-3 lg:p-3 lg:mt-2">
        <span class="mr-2">#</span><span class="font-extrabold">Music</span>
        <span class="ml-2">Aurthor:</span><span>Awalad Hossain</span>
        <p class="lg:text-3xl font-extrabold">World Cup Flags Football</p>
        <p>you get different flag of different country <br> so buy it hurry up</p>
        <hr class="mt-2"><hr>
        <span><i class="fa-regular fa-message"></i> <span class="ml-1">560</span> </span>
        <span class="ml-1"><i class="fa-regular fa-eye"></i><span class="ml-1">1350</span></span>
        <span class="ml-1"><i class="fa-regular fa-clock"></i><span class="ml-1">5</span></span>
        <span class="lg:ml-20 ml-8"><img src="../message.svg" class="rounded-3xl p-2 bg-green-400 inline" alt=""></span>
       </div>
       </div>
     `
         div1.appendChild(div)
    })
},1000)
}


const toggleSpinner = isLoading =>{
    const Loader = document.getElementById('loader')
    if(isLoading){
        Loader.classList.remove('hidden')
    }
    else{
        Loader.classList.add('hidden')
    }
}
Load()