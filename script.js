function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const result = document.getElementById('formResult');
  if(!name||!email||!message){ result.textContent='Please fill all fields.'; return }

  const subject = encodeURIComponent('Testing service request from ' + name);
  const body = encodeURIComponent('Name: '+name+"\nEmail: "+email+"\n\n"+message);
  window.location.href = 'mailto:loayezzat20@gmail.com?subject='+subject+'&body='+body;
  result.textContent = 'Opening your email client to send the message...';

  setTimeout(()=>{ result.textContent = 'Action completed — you can edit the message in your email client if needed.' },1200)
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const href = this.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
    }
  })
})
