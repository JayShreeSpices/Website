const scriptURL1 = "https://script.google.com/macros/s/AKfycbw-j9MvZgWfgIWtRe3_5gcl_mqAHK4B4ws9FAGSs37_ZUVg1744LWQPr97eOQLZ5-BO/exec"
const form1 = document.forms['place_order']
          
form1.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
  document.getElementById("thnk").style.visibility = "visible";
  document.getElementById("thnk").style.opacity = "1";
  document.getElementById("thnk").style.transition = "opacity 0.5s ease";
  form1.reset();
})
