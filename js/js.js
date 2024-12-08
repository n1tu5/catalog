let sel = document.querySelector('select')
let div = document.querySelectorAll('.container article')
sel.addEventListener('change', () => {
    for (const a of div) {
        if(sel.value == a.dataset.type || sel.value == 'Всё'){
            a.style.display = 'grid'
        }else{
            a.style.display = 'none'
        }
    }
})