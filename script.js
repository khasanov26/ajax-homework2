const loadBtn = document.querySelector(".js-load");
const container = document.querySelector('.container')
console.log('adasd')

function users() {
   console.log("asd");
   // evt.preventDefault();
   axios.get('https://jsonplaceholder.typicode.com/users')
   .then(responce => {
      let allObj = responce.data;
      console.log(allObj);
      for (let i = 0; i < allObj.length; i++) {
         container.innerHTML += `
         <div class="card">
         <div class="one">
            <p>id: <span>${responce.data[i].id}</span></p>
            <p>name: <span>${responce.data[i].name}</span></p>
            <p>username: <span>${responce.data[i].username}</span></p>
            <p>email: <span>${responce.data[i].email}</span></p>
         </div>
         <div class="two">
            <div class="title">address:
               <p>street: <span>${responce.data[i].address.street}</span></p>
               <p>suite: <span>${responce.data[i].address.suite}</span></p>
               <p>city: <span>${responce.data[i].address.city}</span></p>
               <p>zipcode: <span>${responce.data[i].address.zipcode}</span></p>
            </div>
            <div class="title">geo:
               <p>lat: <span>${responce.data[i].address.geo.lat}</span></p>
               <p>zipcode: <span>${responce.data[i].address.geo.lng}</span></p>
            </div>

         </div>
         <div class="three">
            <p>phone: <span>${responce.data[i].phone}</span></p>
            <p>website: <span>${responce.data[i].website}</span></p>
            <div class="title">company:
               <p>name: <span>${responce.data[i].company.name}</span></p>
               <p>catchPhrase: <span>${responce.data[i].company.catchPhrase}</span></p>
               <p>bs: <span>${responce.data[i].company.bs}</span></p>
            </div>
         </div>
         `
      }
   })
};

users();


// loadBtn.addEventListener("click", function (evt) {
//    console.log("asd");
//    evt.preventDefault();
//    axios.get('https://jsonplaceholder.typicode.com/users')
//    .then(responce => {
//       let allObj = responce.data;
//       console.log(allObj);
//       for (let i = 0; i < allObj.length; i++) {
//          container.innerHTML += `
//          <div class="card">
//          <div class="one">
//             <p>id: <span>${responce.data[i].id}</span></p>
//             <p>name: <span>${responce.data[i].name}</span></p>
//             <p>username: <span>${responce.data[i].username}</span></p>
//             <p>email: <span>${responce.data[i].email}</span></p>
//          </div>
//          <div class="two">
//             <div class="title">address:
//                <p>street: <span>${responce.data[i].address.street}</span></p>
//                <p>suite: <span>${responce.data[i].address.suite}</span></p>
//                <p>city: <span>${responce.data[i].address.city}</span></p>
//                <p>zipcode: <span>${responce.data[i].address.zipcode}</span></p>
//             </div>
//             <div class="title">geo:
//                <p>lat: <span>${responce.data[i].address.geo.lat}</span></p>
//                <p>zipcode: <span>${responce.data[i].address.geo.lng}</span></p>
//             </div>

//          </div>
//          <div class="three">
//             <p>phone: <span>${responce.data[i].phone}</span></p>
//             <p>website: <span>${responce.data[i].website}</span></p>
//             <div class="title">company:
//                <p>name: <span>${responce.data[i].company.name}</span></p>
//                <p>catchPhrase: <span>${responce.data[i].company.catchPhrase}</span></p>
//                <p>bs: <span>${responce.data[i].company.bs}</span></p>
//             </div>
//          </div>
//          `
//       }
//    })
// });