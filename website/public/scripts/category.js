window.onload = function () {
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

    const synth = window.speechSynthesis;
    const recognition = new SpeechRecognition();
    const icon = document.querySelector('i.fa.fa-microphone')
    const menu = document.getElementsByClassName('menu')
    const button = document.getElementById('clickToListen')
    let paragraph = document.createElement('p');
    let container = document.querySelector('.text-box');
    container.appendChild(paragraph);
    const sound = document.querySelector('.sound');
    var Category;

    icon.addEventListener('click', () => {
        //sound.play();
        dictate();
    });



    const dictate = () => {
        recognition.start();
        recognition.onresult = (event) => {
            const speechToText = event.results[0][0].transcript;
            paragraph.textContent = speechToText;
            console.log(paragraph.textContent);
            Category = paragraph.textContent;
            document.getElementById("categories").value = Category;
        }
    }

    button.addEventListener('click', () => {
        console.log('working');
        utterThis = new SpeechSynthesisUtterance('blind');
        synth.speak(utterThis);
        utterThis = new SpeechSynthesisUtterance('dyslexia');
        synth.speak(utterThis);
        utterThis = new SpeechSynthesisUtterance('other');
        synth.speak(utterThis);

    });



    //var array = ['blind', "dyslexia", "other"]
    //const speak = (array) => {
    //    console.log('hello');
    //    for (x in array) {
    //        console.log(x);
    //        utterThis = new SpeechSynthesisUtterance('blind');
    //        synth.speak(utterThis);
    //    }
    //};
}