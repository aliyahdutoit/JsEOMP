// let all products display

let books = JSON.parse(localStorage.getItem('books ')) ?
JSON.parse(localStorage.getItem('books')) : [
            {
               id: 1,
               title: "Verity",
               author: "Colleen Hoover",
               price: 20,
               genre: "Thriller",
              image: "https://i.postimg.cc/DZmWKXNY/6-of-crows.jpg"
           },
            {
               id: 2,
               title: "If We Were Villains",
               author: "M. L. Rio",
               price : 15,
               genre: "Dark Academia",
               image: "https://i.postimg.cc/15mVsXdS/if-we-were-villains.jpg"
           },
            {
               id: 3,
               title: "The Picture of Dorian Gray",
               author: "Oscar Wilde",
               price: 25,
               genre: "Dark Academia"
           },
            {
               id: 4,
               title: "The Secret History",
               author: "Donna Tartt",
               price: 18,
               genre: "Dark Academia"
           },
            {
               id: 5,
               title: "The Song of Achilles",
               author: "Madeline Miller",
               price: 19,
               genre: "Greek Mythology"
           },
            {
               id: 6,
               title: "Jane Eyre",
               author: "Charlotte Brontë",
               price: 22,
               genre: "Classic"
           },
            {
               id: 7,
               title: "Little Women",
               author: " Louisa May Alcott",
               price: 22,
               genre: "Classic"
           },
            {
               id: 8,
               title: "Shatter Me",
               author: "Taherah Mafi",
               price: 16,
               genre: "Dystopian"
           },
            {
               id: 9,
               title: "The Inheritance Games",
               author: "Jennifer L. Barnes",
               price: 17,
               genre: "Mystery"
           },
            {
               id: 10,
               title: "KillSwitch",
               author: "Penelope Douglas",
               price: 27,
               genre: "Romance"
           },
            {
               id: 11,
               title: "The Maddest Obsession",
               author: "Dannielle Lori",
               price: 23,
               genre: "Romance"
           },
            {
               id: 12,
               title: "Six of Crows",
               author: "Leigh Bardugo",
               price: 24,
               genre: "Fantasy"
           },    
            {
               id: 13,
               title: "La Vie Invisible D'Addie Larue",
               author: "V.E.Schwab",
               price: 30,
               genre: "Fiction"
           },    
            {
               id: 14,
               title: "The Book Thief",
               author: "Markus Zusak",
               price: 28,
               genre: "Classic"
           },    
            {
               id: 15,
               title: "The Atlas Six",
               author: "Olivie Blake",
               price: 35,
               genre: "Dark Academia"
           } ,
           {
            id: 16,
            title: "Exodus",
            author: "Kate Stewart",
            price: 28,
            genre: "Romance"
        } 
];
localStorage.setItem('books',JSON.stringify(books))
let x = JSON.parse(localStorage.getItem('books'));
console.log(x);


// display function

function displayBooks() {
    
    x.forEach(aliyah => {
        console.log('Title: ' + aliyah.title)
        document.querySelector("table").innerHTML += 
        `
        <tr>
    
        <td>${aliyah.id}</td>
        <td>${aliyah.title}</td>
        <td>${aliyah.author}</td>
        <td>${aliyah.genre}</td>
        <td>${aliyah.price}</td>
        <td><button id="edit">edit</button>
        <button id="delete" onclick="deleteItem(${aliyah.id})">delete</button></td>
        
        
       
    </tr>
        
                
        `
        console.table(aliyah);
    });
}

displayBooks();

// delete button

function deleteItem(id) {
    books.splice(id-1, 1);
    let i = 1
    books.forEach(novel => {
     //use i++
     sum = i++;
    });
    displayBooks();
}

