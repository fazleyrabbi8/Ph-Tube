

const loadData = () => {

    fetch('https://openapi.programming-hero.com/api/videos/categories')
        .then(res => res.json())
        .then(data => console.log(data));


};





const showdata = (object) => {

    const dataArray = object.data;
    const cardHolder = document.getElementById('card-container');

    const card = document.createElement('div');
    card.classList =('card w-auto card-compact  bg-base-100 ') ;

   



    dataArray.forEach(data => {

        card.innerHTML = `
        <figure class="shadow-xl rounded-lg ">
        <img src="${data.thumbnail}" alt="Thumbnail" />
        </figure>
        
        
        
        <!-- profile pic -->
        <div class="flex gap-4 items-start my-4 ">
            <img class="h-10 w-10 rounded-full " src="${data.authors[0].profile_picture}"
                alt="profile_picture">
        
                
                <div class=" block gap-2">
                <h1 class="font-bold text-xl "> ${data.title}</h1>
                <h2 class="text-sm flex gap-2">${data.authors[0].profile_name}  <img class="h-5 w5" src="images/bluetick.png"
                        alt="bluetick"></h2>
                <p> <span >${data.others.views}</span>Views</p>
        
            </div>
        
            </div>
        
        ` ;


        cardHolder.appendChild(card) ;

    });



};


loadData();
