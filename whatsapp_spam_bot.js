var buttonSendClass = "._35EW6"; //class name WITH "." from send button
var inputMessageClassName = "_2S1VP copyable-text selectable-text"; //div class name where text is stored
var input = document.getElementsByClassName(inputMessageClassName)[1];

function dispatch(input, message) {
    var evt = new InputEvent('input', {
        bubbles: true
    });
    input.innerHTML = message;
    input.dispatchEvent(evt);
    document.querySelector(buttonSendClass).click();
}

var reps = 100;     // 100 messages
var counter = 0;

function generate_message(){
    return "demo_text";
}

function spam() {
    if (counter < reps) {
        text = generate_message();
        dispatch(input, text);
        setTimeout(spam, 750);  // waits 750 ms to send the next message
        counter++;
    }
}
