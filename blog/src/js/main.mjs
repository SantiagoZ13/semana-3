import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

function handleSubmit(){
    event.preventDefault();
    console.log("Hola Mundo")
}

const $form = document.querySelector("form")
$form.addEventListener("submit" , handleSubmit);


