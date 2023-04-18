const backgroundSound = new Howl({
  src: ['synthwave loop.mp3'],
  loop: true,
  volume: 0.05,
});


const game = document.querySelector('gamediv');
const notclicked = true;
const startButton = document.querySelector('.start');

startButton.addEventListener('click', function() {
  backgroundSound.play();
  for (i = 0; i < 11; i++) {
    let distance = Math.floor((Math.random() + 20) * 100);
    let duration = Math.floor((Math.random() + 1) * 2000);
    const div = document.createElement('div');
    
    function clickfunc(){
      console.log("clicked");
      //sound
      const sound = new Howl({
        src: ['jesses pop 2.mp3']
      });
      sound.play();
      div.style.backgroundColor = 'black'
      div.removeEventListener('click',clickfunc)
    }
    div.addEventListener('click', clickfunc)
    //animation
    anime({
      targets: div,
      // Properties 
      translateX: distance,
      // Property Parameters
      duration: duration,
      easing: 'linear',
      // Animation Parameters
      direction: 'alternate',
      loop: notclicked
    });
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor = "#" + randomColor
    game.append(div);
  } 
  
});

// timer
let timerStatus;
let counter = 0
startButton.addEventListener('click', function() {
    function updateCounter() {
      counter++;
      $(".timer").text(`Time: ${counter}`);
      if (counter < 100) {
       timerStatus = setTimeout(updateCounter, 1000);
      }
    }
    updateCounter();
  });

//stop button
const stopButton = document.querySelector('.stop');
stopButton.addEventListener('click', function(){
    clearTimeout(timerStatus);
    $('gamediv').empty();
    counter = 0;
    $(".timer").text(`Time: ${counter}`);
    backgroundSound.stop();
})



//Timer needs stop when all divs are changed to black
//Show you the time you got and save it as highscore











   