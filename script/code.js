// DOMM MANIPULATION //
const body = document.body

// local storage //

let books = JSON.parse(localStorage.getItem('container')) ?
JSON.parse(localStorage.getItem('.container ')) : [
    {
           "books":[
            {
               "id": "1",
               "name": "Verity",
               "author": "Colleen Hoover",
               "price": "£20",
              Image = URL
           },
            {
               "id": "2",
               "name": "If We Were Villains",
               "author": "M. L. Rio",
               "price": "£15"
               "image" = URL={https://i.postimg.cc/nzhYNxs1/if-we-were-villains.jpg}
           },
            {
               "id": "3",
               "name": "The Picture of Dorian Gray",
               "author": "Oscar Wilde",
               "price": "£25"
           },
            {
               "id": "4",
               "name": "The Secret History",
               "author": "Donna Tartt",
               "price": "£18"
           },
            {
               "id": "5",
               "name": "The Song of Achilles",
               "author": "Madeline Miller",
               "price": "£19",
               "image" = URL={https://i.postimg.cc/xCmTfJbj/TSOA.jpg}
           },
            {
               "id": "6",
               "name": "Jane Eyre",
               "author": "Charlotte Brontë",
               "price": "£22"
           },
            {
               "id": "7",
               "name": "Little Women",
               "author": " Louisa May Alcott",
               "price": "£22"
           },
            {
               "id": "8",
               "name": "Shatter Me",
               "author": "Taherah Mafi",
               "price": "£16"
           },
            {
               "id": "9",
               "name": "The Inheritance Games",
               "author": "Jennifer L. Barnes",
               "price": "£17"
           },
            {
               "id": "10",
               "name": "KillSwitch",
               "author": "Penelope Douglas",
               "price": "£27"
           },
            {
               "id": "11",
               "name": "The Maddest Obsession",
               "author": "Dannielle Lori",
               "price": "£23"
           },
            {
               "id": "12",
               "name": "Six of Crows",
               "author": "Leigh Bardugo",
               "price": "£24",
               "image" = URL={https://i.postimg.cc/Nf39RtBz/6OC.jpg}
           },    
            {
               "id": "13",
               "name": "La Vie Invisible D'Addie Larue",
               "author": "V.E.Schwab",
               "price": "£30"
           },    
            {
               "id": "14",
               "name": "The Book Thief",
               "author": "Markus Zusak",
               "price": "£28"
           },    
            {
               "id": "15",
               "name": "The Atlas Six",
               "author": "Olivie Blake",
               "price": "£35"
           } 
         ]   
    }
];

async function display() {
    let books = await fetchData();
    return books;
}
// fetch('https://api.chucknorris.io/jokes/random')
// .then((res)=>{
//     return res.json();
// })
.then((data)=>{
    let card = document.querySelector('card');
    Object.keys(books).forEach( (card)=>{
        if(books[card].length){
            console.log(`${card}: ${books[card]}`);
            card.innerHTML +=
            `
            <div class="container">
            <div class="card">
              <h3 class="title">prodcut</h3>
            </div>
            </div>
            `
        }
    } )
})