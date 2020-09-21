BX.addCustomEvent('bx.main.filter:blur', (e) => {
    function clickCheck() {
        console.log('e', e)
        let check = document.getElementsByName('UF_CRM_1600328889064')
        const elementByBlock = document.getElementsByClassName('crm-entity-card-widget')
        if (!check[1].checked) elementByBlock[1].style.display = 'none'
        if (check[1].checked) elementByBlock[1].style.display = ''
        console.log('check', check[1].checked)
    }

    try {
        let check = document.getElementsByName('UF_CRM_1600328889064')[1].onclick = clickCheck
    } catch (e) {
        console.log('error', e)
    }
})

BX.addCustomEvent('bx.crm.entityeditorfield:onlayout', (e) => {
    if (e._id === 'UF_CRM_1600328889064') {
        const elementByBlock = document.getElementsByClassName('crm-entity-card-widget')
        let allElems = document.querySelectorAll('[data-cid="UF_CRM_1600328889064"]')
        let span = allElems[0].getElementsByClassName('fields boolean field-item')

        if (span[0].innerText === 'нет') elementByBlock[1].style.display = 'none'
    }
})

