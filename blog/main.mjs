function handleSubmit(){
    event.preventDefault();
    console.log("Hola Mundo")
}

const $form = document.querySelector("form")
$form.addEventListener("submit" , handleSubmit);