

const loadData = (ContentID) => {

    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
        .then(res => res.json())
        .then(data => console.log(data));


};





const showdata = (object) => {

    const dataArray = object.data[0];

    // console.log(dataArray)

    /* 
    
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
    
     */

};




// Show Category Buttons Dynamically from Api
const NavbarContainer = document.getElementById('Navbar-button');

const navbarbuttons = () => {




    const Api = fetch('https://openapi.programming-hero.com/api/videos/categories')
        .then(res => res.json())
        .then(datas => datacategory(datas));


    const datacategory = datas => {
        const categories = datas.data;


        console.log(categories);



        categories.forEach(data => {

            const navButtons = document.createElement('div');

            navButtons.innerHTML = ` 
        
            <button onclick="sendCategory(${data.category_id})" class="btn text-sm text-white bg-red-500"> ${data.category} </button>
    
            `

            NavbarContainer.appendChild(navButtons);
        });






    }


};



const sendCategory = id => {

    // console.log(`Category${id} Button clicked`)

}

// loadData();
navbarbuttons();
