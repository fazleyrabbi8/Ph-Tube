fetch ('https://openapi.programming-hero.com/api/videos/category/1000')
.then( res => res.json())
.then ( data =>showdata(data)) ; 





const showdata = (object) => {

const dataArray = object.data ;

console.log(dataArray) ;
console.log(dataArray[0]) ;

} ;
