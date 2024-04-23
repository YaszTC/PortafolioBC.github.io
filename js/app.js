let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function descargarPDF() {
    // Crear un objeto PDF vacío
    var pdf = new jsPDF();
    
    // Añadir contenido al PDF (aquí puedes agregar texto, imágenes, etc.)
    // pdf.text('¡Hola! Este es un PDF generado dinámicamente.', 10, 10);
    
    // Descargar el PDF
    pdf.save('pdf/Hoja de vida.pdf'); // Cambia la ruta según la ubicación de tu archivo PDF
  }
  