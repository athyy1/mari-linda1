var app = document.getElementById('app')

var Typewriter = new Typewriter(app,{
    loop: false,
    delay: 30,
});

Typewriter
    .pauseFor(2000)
    .typeString('Essa carta é para você, <strong style="color: #800020;">Mari!</strong>')
    .pauseFor(300)
    .start();
