
//  call the api for  kinds of cards
const loadData = (id) => {

    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
        .then(res => res.json())
        .then(data => showdata(data));

};





const showdata = (object) => {

    const dataArray = object.data;

    console.log(dataArray)

    const cardHolder = document.getElementById('card-container');


    cardHolder.innerHTML = '';

    
    const NoDataContainer = document.getElementById('NoData');


    NoDataContainer.innerHTML = '';

    if (dataArray.length > 0) {








        dataArray.forEach(data => {
            const card = document.createElement('div');

            card.classList = ('card w-full   bg-base-100 ');
            card.innerHTML = `
                <figure class="max-h-[9.5rem]">
                <img class="h-full w-full rounded-lg" src="${data.thumbnail}" alt="Thumbnail" />
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


            cardHolder.appendChild(card);

        });






    } else {



        NoDataContainer.innerHTML = ` <div class="flex  flex-col justify-center items-center gap-5 my-10">

            

        <img class="w-auto h-36" src="images/Icon.png" alt="Icon">

        <p class="text-4xl font-bold text-center my-10">
            Oops!! Sorry, There is no <br>
            content here
        </p>

    </div> ` ;




    }






};




// Show Category Buttons Dynamically from Api
const NavbarContainer = document.getElementById('Navbar-button');

const navbarbuttons = () => {




    const Api = fetch('https://openapi.programming-hero.com/api/videos/categories')
        .then(res => res.json())
        .then(datas => datacategory(datas));


    const datacategory = datas => {
        const categories = datas.data;

        categories.forEach(data => {

            const navButtons = document.createElement('div');

            navButtons.innerHTML = ` 
        
            <button onclick="sendCategory(${data.category_id})" class="btn btn-sm btn-error text-white bg-red-500"> ${data.category} </button>
    
            `

            NavbarContainer.appendChild(navButtons);
        });






    }


};



const sendCategory = id => {

    // console.log(`Category${id} Button clicked`)

    loadData(id);
}

navbarbuttons();
