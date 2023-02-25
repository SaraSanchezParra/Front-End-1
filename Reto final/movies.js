
class Movie{

  
    constructor(title, releaseYear, genre, nacionality, photo){
  
        this.title= title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality
        this.genre = genre
        this.photo = photo
  
  
    }
  
    // showDatesMovie(){
    //   console.log("El titulo es " + this.title)
    //   console.log("El año de creacion es " + this.releaseYear)
    //   console.log("La nacionalidad es " + this.nacionality)
    //   console.log("El genero es " + this.genre)
    //   console.log(this.actors)
    //   console.log(this.director)
    //   console.log(this.writer)
    //   console.log(this.photo)
      
    // }
  }  

let pelicula1 = new Movie("Thelma & Louis",1991,"Comedia","USA", "./strass/thelma.jpg")

let pelicula2 = new Movie("Titanic",1997,"Romance","Usa", "./strass/titanic.jpg")

let pelicula3 = new Movie("Mamma Mia",2008,"Comedia romance","Reino Unido", "./strass/mamma.jpg")

let arrayMovies = [pelicula1, pelicula2, pelicula3];

function showMovies(){
  
  let movies = "";

  for (let i=0; i<arrayMovies.length; i++){

    movies += `<div class="container d-flex align-items-center justify-content-center flex-wrap">
    <div class="box">
        <div class="body">
            <div class="imgContainer">
                <img src=${arrayMovies[i].photo} alt="">
            </div>
            <div class="content d-flex flex-column align-items-center justify-content-center">
                <div>
                    <h3 class="text-white fs-5">${arrayMovies[i].title}</h3>
                    <p class="fs-6 text-white">${arrayMovies[i].genre}</p>
                    <p class="fs-6 text-white">${arrayMovies[i].releaseYear}</p>
                </div>
            </div>
        </div>
    </div>`
    
    
    //forma sencilla
    
    // `<div class="card" style="width: 13rem;">
    // //             <img src=${arrayMovies[i].photo} class="card-img-top" alt="...">
    // //             <div class="card-body">
    // //               <h5 class="card-title">${arrayMovies[i].title}</h5>
    // //               <p class="card-text">${arrayMovies[i].genre}</p>
    // //               <p class="card-text">${arrayMovies[i].releaseYear}</p>
    // //             </div>
    // //           </div>`
            
    } 
  
    $('#moviesCard').append(movies)
  }
  

  function addMovies(){

    let title = $(`#title`).val();
    let genre = $(`#genre`).val();
    let releaseYear = $(`#releaseYear`).val();
    let nacionality = $(`#nacionality`).val();
    let photo = $(`#photo`).val();
    
    let addMovie = new Movie(title, genre, releaseYear, nacionality, photo);
  
    arrayMovies.push(addMovie);
    console.log(arrayMovies)


  }


  



// pelicula1.showDatesMovie()
// pelicula2.showDatesMovie()
// pelicula3.showDatesMovie()


// actor1.showAtributes ();
// actor2.showAtributes ();
// actriz3.showAtributes ();
// director.showAtributes ();
// director1.showAtributes ();
// director2.showAtributes ();
// writer.showAtributes ();
// writer1.showAtributes ();
// writer2.showAtributes ();
