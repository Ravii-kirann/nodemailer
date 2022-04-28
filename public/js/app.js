const contactForm = document.querySelector('.email-app');
let send = document.getElementById('send')
let Name = document.getElementById('bcc')
let email = document.getElementById('to')
let subject = document.getElementById('cc')
let message = document.getElementById('message')
let draft = document.getElementById('draft')
let deletemsg = document.getElementById('discard')
message.addEventListener("keydown",validation);
function validation()
{
 var x=message.value;
 var validate=/^([a-zA-Z ]){2,30}$/;
 if(x.match(validate)){
    message.style.border="2px solid green"
 }
 else{
   message.style.border="2px solid red"
 }
}
email.addEventListener("keydown",validation1);
function validation1()
{
 var y=email.value;
 var validate =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if(y.match(validate)){
     email.style.border="2px solid green"
 }
 else{
    email.style.border="2px solid red"
}

 }

 draft.addEventListener('click',(e)=>{
     let draftData = {
        name:name.value,
        email:email.value,
        subject:subject.value,
        message:message.value
     }
     let dhr = new XMLHttpRequest();
      dhr.open('POST','/')
      dhr.setRequestHeader('content-type','application/json')
      if(dhr.responseText =='SUCCESS'){
          alert('message saved as draft')
         name.value = '';
          email.value ='';
          subject.value = '';
          message.value = '';

      }else{
          alert('something went wrong')
      }
      xhr.send(JSON.stringify(draftData))

 })


send.addEventListener('click',(e)=>{
    let formData = {
    name:name.value,
        email:email.value,
        subject:subject.value,
        message:message.value
    }

    let xhr = new XMLHttpRequest();
      xhr.open('POST','/')
      xhr.setRequestHeader('content-type','application/json')
      xhr.onload = function(){
        if(xhr.responseText =='SUCCESS'){
            alert('Email sent')
           name.value = '';
            email.value ='';
            subject.value = '';
            message.value = '';
  
        }else{
            alert('something went wrong')
        }
      }
      xhr.send(JSON.stringify(formData))
})

