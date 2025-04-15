let shareBtn = document.querySelector('.btn-share');

shareBtn.addEventListener("click", function(){
    document.body.classList.add ("has-share-open");
});

let closeModal = document.querySelector('.closeModal');

closeModal.addEventListener("click", function(){
    document.body.classList.remove ("has-share-open");
});



