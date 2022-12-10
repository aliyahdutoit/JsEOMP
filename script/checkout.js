//display checkout

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
           } 
];
localStorage.setItem('books',JSON.stringify(books))
let x = JSON.parse(localStorage.getItem('books'));
console.log(x);

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
          <td><!-- Button trigger modal -->
          <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
            add to checkout
          </button>
          
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">How much Quantity would you like?</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label for="inputQuantity" class="col-form-label">Quantity</label>
                </div>
                <div class="col-auto">
                  <input type="number" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                </div>
             
              </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" id="savebutton">Save changes</button>
                </div>
              </div>
            </div>
          </div></td>
      
      </tr>
      
              
      `
      console.table(aliyah);
  });
} 
displayBooks();

//add books to checkout
// let checkout = JSON.parse(localStorage.getItem ('checkout'));

// function displayCheckout(id) {
//   console.log(id)
//   checkout.push(books[id-1])
//   console.log(checkout)
//   localStorage.setItem('checkout', JSON.stringify(checkout))
// }


let xp = JSON.parse(localStorage.getItem('checkout'));
let y = document.querySelector('tbody')

xp.forEach(element => {
  console.log(element);
  y.innerHTML +=
  `
  <tr>
  <td>${element.id}</td>
  <td>${element.name}</td>
  <td>${element.author}</td>
  <td>${element.price}</td>
  <td>${element.quantity}</td>
 
  `
})