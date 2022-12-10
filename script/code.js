

// local storage //


let books = JSON.parse(localStorage.getItem('books ')) ?
JSON.parse(localStorage.getItem('books')) : [
            {
               id: 1,
               title: "Verity",
               author: "Colleen Hoover",
               price: 20,
               quote: "It's clear that Verity was a master at manipulating the truth. The only question that remains is: Which truth was she manipulating?",
               genre: "Thriller",
              image: "https://i.postimg.cc/bJV8YHgn/verity.jpg"
           },
            {
               id: 2,
               title: "If We Were Villains",
               author: "M. L. Rio",
               price : 15,
               quote: "You can justify anything if you do it poetically enough.",
               genre: "Dark Academia",
               image: "https://i.postimg.cc/15mVsXdS/if-we-were-villains.jpg"
           },
            {
               id: 3,
               title: "The Picture of Dorian Gray",
               author: "Oscar Wilde",
               quote: "Experience is merely the name men gave to their mistakes.",
               price: 25,
               genre: "Dark Academia",
               image: "https://i.postimg.cc/SxLBxFf8/the-picture-of-dorian-gray.jpg"
           },
            {
               id: 4,
               title: "The Secret History",
               author: "Donna Tartt",
               quote: "It's a very Greek idea, and a very profound one. Beauty is terror. Whatever we call beautiful, we quiver before it. And what could be more terrifying and beautiful, to souls like the Greeks or our own, than to lose control completely?",
               price: 18,
               genre: "Dark Academia",
               image: "https://i.postimg.cc/nrf7LdmP/the-secret-history.jpg"
           },
            {
               id: 5,
               title: "The Song of Achilles",
               author: "Madeline Miller",
               price: 19,
               quote: "I am made of memories.",
               genre: "Greek Mythology",
               image: "https://i.postimg.cc/xCmTfJbj/TSOA.jpg"
           },
            {
               id: 6,
               title: "Jane Eyre",
               author: "Charlotte Brontë",
               quote: "If all the world hated you and believed you wicked, while your own conscience approved of you and absolved you from guilt, you would not be without friends.",
               price: 22,
               genre: "Classic",
               image: "https://i.postimg.cc/QMX2z8WC/jane-eyre.jpg"
           },
            {
               id: 7,
               title: "Little Women",
               author: " Louisa May Alcott",
               quote: "Jo’s eyes sparkled, for it’s always pleasant to be believed in, and a friend’s praise is always sweeter than a dozen newspaper puffs.",
               price: 22,
               genre: "Classic",
               image: "https://i.postimg.cc/1t9NFgX9/littlle-women.jpg"
           },
            {
               id: 8,
               title: "Shatter Me",
               author: "Taherah Mafi",
               quote: "I Grieve Nothing. I Take Everything: IGNITE, my love.",
               price: 16,
               genre: "Dystopian",
               image: "https://i.postimg.cc/Pq6L87QV/shatter-mme.jpg"
           },
            {
               id: 9,
               title: "The Inheritance Games",
               author: "Jennifer L. Barnes",
               quote: "On the contrary, Heiress, bleeding is a devastatingly good look for me.",
               price: 17,
               genre: "Mystery",
               image: "https://i.postimg.cc/mknGGYRr/the-inheritance-games.jpg"
           },
            {
               id: 10,
               title: "Kill Switch",
               author: "Penelope Douglas",
               quote: "Because pain in the body quiets the pain in the head. It feels good, like a kill switch for the brain.",
               price: 27,
               genre: "Romance",
               image: "https://i.postimg.cc/P599rXBS/killswitch.jpg"
           },
            {
               id: 11,
               title: "The Maddest Obsession",
               author: "Dannielle Lori",
               quote: "Haven't you heard? Love is an obsession. Some would even say... The Maddest Obsession.",
               price: 23,
               genre: "Romance",
               image: "https://i.postimg.cc/269LZtr8/the-maddest-obsession.jpg"
           },
            {
               id: 12,
               title: "Six of Crows",
               author: "Leigh Bardugo",
               price: 24,
               genre: "Fantasy",
               quote: "No mourners, No funerals.",
               image: "https://i.postimg.cc/Nf39RtBz/6OC.jpg"
           },    
            {
               id: 13,
               title: "La Vie Invisible D'Addie Larue",
              author: "V.E.Schwab",
                quote: "Qu'est-ce qu'une personne, sinon les traces qu'elle laisse derrière elle?",
               price: 30,
               genre: "Fiction",
               image: "https://i.postimg.cc/zGMJT1RQ/la-vie-invisible-d-addie-larue.jpg"
           },    
            {
               id: 14,
               title: "The Book Thief",
               author: "Markus Zusak",
               quote: "Like most misery, it started with apparent happiness.",
               price: 28,
               genre: "Classic",
               image: "https://i.postimg.cc/RF08VWgJ/the-book-thief.jpg"
           },    
            {
               id: 15,
               title: "The Atlas Six",
               author: "Olivie Blake",
               quote: "They were binary stars, trapped in each other’s gravitational field and easily diminished without the other’s opposing force.",
               price: 35,
               genre: "Dark Academia",
               image: "https://i.postimg.cc/mk3bfdVy/the-atlas-six.jpg"
           },
           {
               id: 16,
               title: "Exodus",
               author: "Kate Stewart",
               quote: "We love rainy days, don't we, baby?",
               price: 28,
               genre: "Romance",
               image: "https://i.postimg.cc/FsHjxMX3/exodus.jpg"
           } 
];
localStorage.setItem('books',JSON.stringify(books))
let x = JSON.parse(localStorage.getItem('books'));
console.log(x);

x.forEach(aliyah => {
    console.log('Title: ' + aliyah.title)
    document.querySelector(".card").innerHTML += 
    `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${aliyah.image}" class="img-fluid rounded-start" alt="..." id="image">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${aliyah.title}</h5>
          <p class="card-text"><small class="text-muted">${aliyah.genre}</small></p>
          <p class="card-text">£${aliyah.price}</p>
          <p class="card-text">"${aliyah.quote}"</p>
          <p class="card-text"><small class="text-muted">by ${aliyah.author}</small>
          <button type="button" id="" onclick="addToCart(${aliyah.id})">add to checkout</button></p>
         
        </div>
      </div>
    </div>
    </div>
            
    `
    console.log(aliyah);
});


//add books to checkout
// let checkout = JSON.parse(localStorage.getItem ('checkout'));

// function displayCheckout(id) {
//   console.log(id)
//   checkout.push(books[id-1])
//   console.log(checkout)
//   localStorage.setItem('checkout', JSON.stringify(checkout))
// }
