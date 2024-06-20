 
 const obtenerImagenCopiada = () => {

    let items = (event.clipboardData || event.originalEvent.clipboardData).items;
    console.log('items :>> ', items);

    let blob = null;

    for (let i = 0; i < items.length; i++) {
        if(items[i].type.indexOf("image") === 0){
            blob = items[i].getAsFile();
        }
    }

    if (blob !== null) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let llegaImagen = document.getElementById("llegaImagen");
            llegaImagen.src = event.target.result;
            console.log('event.target.result :>> ', event.target.result);

        }
        reader.readAsDataURL(blob);
    }

 }

 let inputImagen = document.getElementById("imagenes");
 inputImagen.addEventListener("paste", obtenerImagenCopiada)
