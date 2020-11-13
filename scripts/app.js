// declare globals

let submitBtn =  document.getElementById('submit__btn');
let video_1 = document.getElementById('video__one');
let video_2 = document.getElementById('video__two');

// functions go here
function smiley(){
    submitBtn.textContent = ':)';
}

function loadVideos(){
    video_1.play();
    video_2.pause();
}

function showSuccessVideo(){
    video_1.pause();
    video_2.classList.remove('hidden');
    video_1.classList.add('hidden');
    video_2.play();
}


window.addEventListener('load', function(){
    video_1.play();
})

submitBtn.addEventListener('click', showSuccessVideo);
submitBtn.addEventListener('click', smiley);