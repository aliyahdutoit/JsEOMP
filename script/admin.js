let books = JSON.parse(localStorage.getItem('books ')) ?
JSON.parse(localStorage.getItem('books')) : [
            {
               id: 1,
               title: "Verity",
               author: "Colleen Hoover",
               price: 20,
              image: "https://i.postimg.cc/DZmWKXNY/6-of-crows.jpg"
           },
            {
               id: 2,
               title: "If We Were Villains",
               author: "M. L. Rio",
               price : 15,
               image: "https://i.postimg.cc/15mVsXdS/if-we-were-villains.jpg"
           },
            {
               id: 3,
               title: "The Picture of Dorian Gray",
               author: "Oscar Wilde",
               price: 25
           },
            {
               id: 4,
               title: "The Secret History",
               author: "Donna Tartt",
               price: 18
           },
            {
               id: 5,
               title: "The Song of Achilles",
               author: "Madeline Miller",
               price: 19,
            //  "image": URL={"https://i.postimg.cc/xCmTfJbj/TSOA.jpg"}
           },
            {
               id: 6,
               title: "Jane Eyre",
               author: "Charlotte Brontë",
               price: 22
           },
            {
               id: 7,
               title: "Little Women",
               author: " Louisa May Alcott",
               price: 22
           },
            {
               id: 8,
               title: "Shatter Me",
               author: "Taherah Mafi",
               price: 16
           },
            {
               id: 9,
               title: "The Inheritance Games",
               author: "Jennifer L. Barnes",
               price: 17
           },
            {
               id: 10,
               title: "KillSwitch",
               author: "Penelope Douglas",
               price: 27
           },
            {
               id: 11,
               title: "The Maddest Obsession",
               author: "Dannielle Lori",
               price: 23
           },
            {
               id: 12,
               title: "Six of Crows",
               author: "Leigh Bardugo",
               price: 24,
            //    "image": URL={"https://i.postimg.cc/Nf39RtBz/6OC.jpg"}
           },    
            {
               id: 13,
               title: "La Vie Invisible D'Addie Larue",
               author: "V.E.Schwab",
               price: 30
           },    
            {
               id: 14,
               title: "The Book Thief",
               author: "Markus Zusak",
               price: 28
           },    
            {
               id: 15,
               title: "The Atlas Six",
               author: "Olivie Blake",
               price: 35
           } 
];
localStorage.setItem('books',JSON.stringify(books))
let x = JSON.parse(localStorage.getItem('books'));
console.log(x);

x.forEach(aliyah => {
    console.log('Title: ' + aliyah.title)
    document.querySelector("table").innerHTML += 
    `
    <tr>

    <td>${aliyah.id}</td>
    <td>${aliyah.title}</td>
    <td>${aliyah.author}</td>
    <td>${aliyah.price}</td>
    <td><button>edit</button></td>
    <td><button>delete</button></td>
   
</tr>
    
            
    `
    console.table(aliyah);
});
