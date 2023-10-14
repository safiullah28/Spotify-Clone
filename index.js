
//Spotify 

var songIndex = 0;
var Audioelement = new Audio('songs/1.mp3');
var masterplay=document.getElementById('masterplay');
var myProgressbar=document.getElementById('myProgressbar');
var gif=document.getElementById('gif');
var songItem= Array.from(document.getElementsByClassName('songItem'));
var masterSongName=document.getElementById('masterSongName');
var songs=[
  {songName: "Aadat (Juda Hoke Bhi) - Atif Aslam - Kunal Khemu", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
  {songName: "Agar Tu Hota Full Song with Lyrics ! Baaghi", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
  {songName: "BAARISHEIN Song ! Arko Feat. Atif Aslam", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
  {songName: "Britney Spears - Criminal (Official Video)", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
  {songName: "Mera Dil Bhi Kitna Pagal Hai ! Atif Aslam !", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
  {songName: "Salam-e-Ishq", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
  {songName: "Salam-e-Ishq", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
  {songName: "Salam-e-Ishq", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
  {songName: "Salam-e-Ishq", filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
]

songItem.forEach((element,i)=>{
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterplay.addEventListener('click',()=>{
  if(Audioelement.paused||Audioelement.currentTime<=0){
  Audioelement.play();
  masterplay.classList.remove('fa-circle-play');
  masterplay.classList.add('fa-circle-pause');
  gif.style.opacity=1;
  }
  else{
   Audioelement.pause();
   masterplay.classList.remove('fa-circle-pause');
   masterplay.classList.add('fa-circle-play');
     gif.style.opacity = 0;
  }
})

Audioelement.addEventListener('timeupdate',()=>{

//Update Seekbar
  let progress=parseInt((Audioelement.currentTime/Audioelement.duration)*100);
  myProgressbar.value=progress;
})

myProgressbar.addEventListener('change',()=>{

  Audioelement.currentTime = myProgressbar.value * Audioelement.duration/100;
})

const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.classList.remove("fa-circle-pause");
    element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    masterSongName.innerText = songs[songIndex].songName;
    e.target.classList.add("fa-circle-pause");
    Audioelement.src=`songs/ ${songIndex+1} .mp3`;
    Audioelement.currentTime=0;
    Audioelement.play();
    gif.style.opacity=1;
       masterplay.classList.remove("fa-circle-play");
       masterplay.classList.add("fa-circle-pause");
  })
})

document.getElementById('next').addEventListener('click', () => {
  if (songIndex > 9) {
    songIndex = 0;
  } 
  else {
    songIndex += 1;
  }
  Audioelement.src = `songs/ ${songIndex + 1} .mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  Audioelement.currentTime = 0;
  Audioelement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex-=1;
  }
Audioelement.src = `songs/ ${songIndex + 1} .mp3`;
masterSongName.innerText=songs[songIndex].songName;
Audioelement.currentTime = 0;
Audioelement.play();
masterplay.classList.remove("fa-circle-play");
masterplay.classList.add("fa-circle-pause");
})

