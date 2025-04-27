let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let TarefeBtn = document.querySelectorAll('.tarefe-btn')
let ModalNegativBtn = document.querySelector('.action-negative')

for (let i = 0; i < TarefeBtn.length; i++) {
    TarefeBtn[i].addEventListener('click', function () {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
    
}

ModalNegativBtn.addEventListener ('click', closemodal)

function closemodal() {
        modal.style.display = 'none'
        backdrop.style.display = 'none'
}

