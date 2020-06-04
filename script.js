const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// recommendations
function displayRadioValue() { 
  var ele = document.getElementsByName('allergy'); 
    
  for(i = 0; i < ele.length; i++) { 
      if(ele[0].checked){
      document.getElementById("result").innerHTML
              = ele[0].value +'\xa0\xa0' +"Allergy."+'\xa0\xa0\xa0\xa0'+"<b>Recommended Juice:</b>"+'\xa0\xa0'+"Banana Juice. "+'\xa0\xa0'+"<b>Reason:</b>"+'\xa0'+" Good for skin. High in potassium, it also contains histamine-lowering nutrients, magnesium and vitamin C."; 
      } 
      else if(ele[1].checked){
      document.getElementById("result").innerHTML
              = ele[1].value+'\xa0\xa0' +"Allergy."+'\xa0\xa0\xa0\xa0'+"<b>Recommended Juice:</b>"+'\xa0\xa0'+"Mango</b>"+'\xa0'+'or '+'Banana Juice.'+'\xa0\xa0'+"<b>Reason:</b>"+'\xa0'+"Less Acid."; 
      }
      else if(ele[2].checked){
      document.getElementById("result").innerHTML
              = ele[2].value+'\xa0\xa0' +"Allergy."+'\xa0\xa0\xa0\xa0'+"<b>Recommended Juice:</b>"+'\xa0\xa0'+"Mango Juice."+'\xa0\xa0'+"<b>Reason:</b>"+'\xa0'+"Our Mango Juice are not from pollen and raw fruits. They are fresh and healthy for children";  
      }
      else{
      document.getElementById("result").innerHTML= "Nothing selected. Please select to get your recommended juice."; 
      }
} 
}
// weather

function weather() { 
  var w = document.getElementsByName('weather'); 
    
  for(i = 0; i < w.length; i++) { 
      if(w[0].checked){
      document.getElementById("cweather").innerHTML
              = w[0].value +'\xa0\xa0' +"weather."+'\xa0\xa0\xa0\xa0'+"<b>Recommended Juice:</b>"+'\xa0\xa0'+"Apple Juice. "+'\xa0\xa0'+"<b>Reason:</b>"+'\xa0'+" Comes warm and fresh."; 
      } 
      else if(w[1].checked){
      document.getElementById("cweather").innerHTML
              = w[1].value+'\xa0\xa0' +"weather."+'\xa0\xa0\xa0\xa0'+"<b>Recommended Juice:</b>"+'\xa0\xa0'+'Orange Juice.'+'\xa0\xa0'+"<b>Reason:</b>"+'\xa0'+"Helps the child to refresh the mind and gain energy from our natural orange fruit sugar."; 
      }
      else if(w[2].checked){
      document.getElementById("cweather").innerHTML
              = w[2].value+'\xa0\xa0' +"weather."+'\xa0\xa0\xa0\xa0'+"<b>Recommended Juice:</b>"+'\xa0\xa0'+"Mango Juice."+'\xa0\xa0'+"<b>Reason:</b>"+'\xa0'+" Warm, sweet and energetic.";  
      }
      else{
      document.getElementById("cweather").innerHTML= "Nothing selected. Please select to get your recommended juice."; 
      }
} 
}

