document.addEventListener("DOMContentLoaded", function (event) {
    const elementByBlock = document.getElementsByClassName('crm-entity-card-widget')
    elementByBlock[1].style.display = 'none'

    let allElems = document.querySelectorAll('[data-cid="UF_CRM_1600328889064"]')

    console.log('allElems', Array.prototype.slice.call(allElems))
});
