BX.ready(function(){
    console.log('ready')
    const elementsByCheck = document.getElementsByName('UF_CRM_1600328889064')
    console.log(elementsByCheck)
   // if(elementsByCheck[0] == true){ console.log('hello')}
    const elementByBlock = document.getElementsByClassName('crm-entity-card-widget')
    elementByBlock[1].style.display = 'none'



})


