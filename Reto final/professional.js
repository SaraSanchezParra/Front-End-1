class Professional {


    constructor (name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo){

    this.name= name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;
    this.photo = photo
}

    // showAtributes (){
    // console.log(this.name);
    // console.log(this.age);
    // console.log(this.weight);
    // console.log(this.height);
    // console.log(this.isRetired);
    // console.log(this.nationality);
    // console.log(this.oscarsNumber);
    // console.log(this.profession);
    // console.log(this.photo);
    // }
}

let actor1 = new Professional ("Brad Pitt", 59, 78, 180, false, "Estadounidense", 2, "actor", "./strass/brad.jpeg" );

let actor2 = new Professional ("Leonardo Di Caprio", 48, 85, 183, false, "Estadounidense", 1, "actor", "./strass/dicaprio.jpeg");

let actriz3 = new Professional ("Meryl Streep", 73, 63, 167, false, "Estadounidense", 3, "actriz", "./strass/meryl1.jpg");

let director = new Professional ("Alejandro Amenabar", 54, 68, 165, false, "Spanish", 3, "director", "./strass/amenabar.jpg");

let director1 = new Professional ("Quentin Tarantino", 65, 95, 190, false, "Italian", 2, "director", "./strass/tarantino1.jpg");

let director2 = new Professional ("Steven Spielberg", 70, 68, 165, false, "Estadounidense", 4, "director", "./strass/spielberg.jpeg");

let arrayProfessionals = [actor1, actor2, actriz3, director, director1, director2];

function showProfessionals(){
  
    let professionals = "";
  
    for (let i=0; i<arrayProfessionals.length; i++){
  
       professionals += `<div class="container d-flex align-items-center justify-content-center flex-wrap">
       <div class="box">
           <div class="body">
               <div class="imgContainer">
                   <img src=${arrayProfessionals[i].photo} alt="">
               </div>
               <div class="content d-flex flex-column align-items-center justify-content-center">
                   <div>
                       <h3 class="text-white fs-5">${arrayProfessionals[i].name}</h3>
                       <p class="fs-6 text-white">Age: ${arrayProfessionals[i].age}</p>
                       <p class="fs-6 text-white">Weight: ${arrayProfessionals[i].weight}</p>
                       <p class="fs-6 text-white">Height: ${arrayProfessionals[i].height}</p>
                       <p class="fs-6 text-white">Is retired?: ${arrayProfessionals[i].isRetired}</p>
                       <p class="fs-6 text-white">Nationality: ${arrayProfessionals[i].nationality}</p>
                       <p class="fs-6 text-white">Oscars number: ${arrayProfessionals[i].oscarsNumber}</p>
                       <p class="fs-6 text-white">Profession: ${arrayProfessionals[i].profession}</p>

                   </div>
               </div>
           </div>
       </div>`
      
       //forma sencilla
      
      // `<div class="card" style="width: 13rem;">
      // //             <img src=${arrayProfessionals[i].photo} class="card-img-top" alt="...">
      // //             <div class="card-body">
      // //               <h5 class="card-title">${arrayProfessionals[i].name}</h5>
      // //               <p class="card-text">Age: ${arrayProfessionals[i].age}</p>
      // //               <p class="card-text">Weight: ${arrayProfessionals[i].weight}</p>
      // //               <p class="card-text">Height: ${arrayProfessionals[i].height}</p>
      // //               <p class="card-text">Is retired?: ${arrayProfessionals[i].isRetired}</p>
      // //               <p class="card-text">Nationality: ${arrayProfessionals[i].nationality}</p>
      // //               <p class="card-text">Oscars number: ${arrayProfessionals[i].oscarsNumber}</p>
      // //               <p class="card-text">Profession: ${arrayProfessionals[i].profession}</p>
                
      // //             </div>
      // //           </div>`
            
      } 
     
      $('#professionalsCard').append(professionals)
    }
     

// let writer = new Professional ("Juan Alias", 45, 65, 180, false, "Portuguese", 0, "guionista");

// let writer1 = new Professional ("Mary Watson", 35, 54, 157, false, "Australian", 2, "guionista");

// let writer2 = new Professional ("Silviana Petrucci", 70, 63, 125, true, "Italian", 1, "guionista");



// actor1.showAtributes ();
// actor2.showAtributes ();
// actriz3.showAtributes ();
// director.showAtributes ();
// director1.showAtributes ();
// director2.showAtributes ();
// writer.showAtributes ();
// writer1.showAtributes ();
// writer2.showAtributes ();