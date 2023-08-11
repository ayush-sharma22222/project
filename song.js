
let songIndex = 0;

let audioElement = new Audio("radhika gori se.mp3",
);
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let songiteam = Array.from(document.getElementsByClassName('songiteam'));
let songs = [
    {URL:"radhika gori se.mp3"},
    {URL:"chalo re man.mp3"},
   
]

//play pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("ri-play-circle-fill");
        masterPlay.classList.add("ri-pause-circle-fill");

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("ri-pause-circle-fill");
        masterPlay.classList.add("ri-play-circle-fill");
    }
})
//listen to event
audioElement.addEventListener('timeupdate', ()=>{
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressbar.value =progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime =myProgressbar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songiteam')).forEach((element)=>{
        element.classList.remove("ri-pause-line ");
        element.classList.add("ri-play-line ");

    })

}
Array.from(document.getElementsByClassName('songiteam')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
makeAllPlays();
console.log(e.target);
songIndex = parseInt(e.target.id);
e.target.classList.remove("ri-play-circle-fill");
e.target.classList.add("ri-pause-circle-fill");
audioElement.src = 'songs/${songIndex+1}.mp3';
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove("ri-play-circle-fill");
masterPlay.classList.add("ri-pause-circle-fill");


    })
})

