function iniciarPagina () {


    let selectionSeleccionarInicio = document.getElementById('inicio')
    selectionSeleccionarInicio.style.display = 'flex' 

    let selectionSeleccionarInfo = document.getElementById('info')
    selectionSeleccionarInfo.style.display = 'none'
    let selectionSeleccionarPerfumes = document.getElementById('infoPerfumes')
    selectionSeleccionarPerfumes.style.display = 'none'
    let selectionSelecionarIngredientes = document.getElementById('infoIngrediente')
    selectionSelecionarIngredientes.style.display = 'none'
    let selectionSeleccionarProceso = document.getElementById('procesoElab')
    selectionSeleccionarProceso.style.display = 'none'
    let selectionSeleccionarCiencia = document.getElementById('cienciaCreatividad')
    selectionSeleccionarCiencia.style.display = 'none'
    let selectionSelccionarNosotros = document.getElementById('sobreNosotros')
    selectionSelccionarNosotros.style.display = 'none'

    

    let selectionBotonReiniciar = document.getElementById('boton-reiniciar')
    selectionBotonReiniciar.style.display = true

    let botonInfo = document.getElementById('inform')
    botonInfo.addEventListener('click', cargarInfo)
    let botonPerfumes = document.getElementById('boton-perfumes')
    botonPerfumes.addEventListener('click', cargarPerfumes)
    let botonIngrediente = document.getElementById('boton-ingredientes')
    botonIngrediente.addEventListener('click', cargarIngredientes)
    let botonProceso = document.getElementById('boton-proceso')
    botonProceso.addEventListener('click', cargarProceso)
    let botonCiencia = document.getElementById('boton-ciencia')
    botonCiencia.addEventListener('click', cargarCiencia)
    let botonNosotros = document.getElementById('boton-nosotros')
    botonNosotros.addEventListener('click', cargarNosotros)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)


    let botonRegresar = document.getElementById('boton-regresar')
    botonRegresar.addEventListener('click', cargarInfo)
}

function cargarInfo () {
    let selectionSeleccionarInfo = document.getElementById('info')
    selectionSeleccionarInfo.style.display = 'flex'
    let selectionSeleccionarPerfumes = document.getElementById('infoPerfumes')
    selectionSeleccionarPerfumes.style.display = 'none'
    let selectionSelecionarIngredientes = document.getElementById('infoIngrediente')
    selectionSelecionarIngredientes.style.display = 'none'
    let selectionSeleccionarProceso = document.getElementById('procesoElab')
    selectionSeleccionarProceso.style.display = 'none'
    let selectionSeleccionarCiencia = document.getElementById('cienciaCreatividad')
    selectionSeleccionarCiencia.style.display = 'none'
    let selectionSelccionarNosotros = document.getElementById('sobreNosotros')
    selectionSelccionarNosotros.style.display = 'none'

    let selectionSeleccionarInicio = document.getElementById('inicio')
    selectionSeleccionarInicio.style.display = 'none'

    let selectionBotonReiniciar = document.getElementById('boton-reiniciar')
    selectionBotonReiniciar.style.display = true

    let botonInfo = document.getElementById('inform')
    botonInfo.addEventListener('click', cargarInfo)
    let botonPerfumes = document.getElementById('boton-perfumes')
    botonPerfumes.addEventListener('click', cargarPerfumes)
    let botonIngrediente = document.getElementById('boton-ingredientes')
    botonIngrediente.addEventListener('click', cargarIngredientes)
    let botonProceso = document.getElementById('boton-proceso')
    botonProceso.addEventListener('click', cargarProceso)
    let botonCiencia = document.getElementById('boton-ciencia')
    botonCiencia.addEventListener('click', cargarCiencia)
    let botonNosotros = document.getElementById('boton-nosotros')
    botonNosotros.addEventListener('click', cargarNosotros)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)


    let botonRegresar = document.getElementById('boton-regresar')
    botonRegresar.addEventListener('click', cargarInfo)
}


function cargarPerfumes () {
    let selectionSeleccionarInfo = document.getElementById('info')
    selectionSeleccionarInfo.style.display = 'none'
    let selectionSeleccionarPerfumes = document.getElementById('infoPerfumes')
    selectionSeleccionarPerfumes.style.display = 'flex'
    let selectionSelecionarIngredientes = document.getElementById('infoIngrediente')
    selectionSelecionarIngredientes.style.display = 'none'
    let selectionSeleccionarProceso = document.getElementById('procesoElab')
    selectionSeleccionarProceso.style.display = 'none'
    let selectionSeleccionarCiencia = document.getElementById('cienciaCreatividad')
    selectionSeleccionarCiencia.style.display = 'none'
    let selectionSelccionarNosotros = document.getElementById('sobreNosotros')
    selectionSelccionarNosotros.style.display = 'none'

    let selectionSeleccionarInicio = document.getElementById('inicio')
    selectionSeleccionarInicio.style.display = 'none'


    let botonRegresar = document.getElementById('boton-regresar')
    botonRegresar.addEventListener('click', cargarInfo)
    botonRegresar.style.display = true
}

function cargarIngredientes () {
    let selectionSeleccionarInfo = document.getElementById('info')
    selectionSeleccionarInfo.style.display = 'none'
    let selectionSeleccionarPerfumes = document.getElementById('infoPerfumes')
    selectionSeleccionarPerfumes.style.display = 'none'
    let selectionSelecionarIngredientes = document.getElementById('infoIngrediente')
    selectionSelecionarIngredientes.style.display = 'flex'
    let selectionSeleccionarProceso = document.getElementById('procesoElab')
    selectionSeleccionarProceso.style.display = 'none'
    let selectionSeleccionarCiencia = document.getElementById('cienciaCreatividad')
    selectionSeleccionarCiencia.style.display = 'none'
    let selectionSelccionarNosotros = document.getElementById('sobreNosotros')
    selectionSelccionarNosotros.style.display = 'none'

    let selectionSeleccionarInicio = document.getElementById('inicio')
    selectionSeleccionarInicio.style.display = 'none'

    let botonRegresar1 = document.getElementById('boton-regresar1')
    botonRegresar1.addEventListener('click', cargarInfo)
    
}
    
function cargarProceso () {
    let selectionSeleccionarInfo = document.getElementById('info')
    selectionSeleccionarInfo.style.display = 'none'
    let selectionSeleccionarPerfumes = document.getElementById('infoPerfumes')
    selectionSeleccionarPerfumes.style.display = 'none'
    let selectionSelecionarIngredientes = document.getElementById('infoIngrediente')
    selectionSelecionarIngredientes.style.display = 'none'
    let selectionSeleccionarProceso = document.getElementById('procesoElab')
    selectionSeleccionarProceso.style.display = 'flex'
    let selectionSeleccionarCiencia = document.getElementById('cienciaCreatividad')
    selectionSeleccionarCiencia.style.display = 'none'
    let selectionSelccionarNosotros = document.getElementById('sobreNosotros')
    selectionSelccionarNosotros.style.display = 'none'

    let selectionSeleccionarInicio = document.getElementById('inicio')
    selectionSeleccionarInicio.style.display = 'none'

    let botonRegresar2 = document.getElementById('boton-regresar2')
    botonRegresar2.addEventListener('click', cargarInfo)
}

function cargarCiencia () {
    let selectionSeleccionarInfo = document.getElementById('info')
    selectionSeleccionarInfo.style.display = 'none'
    let selectionSeleccionarPerfumes = document.getElementById('infoPerfumes')
    selectionSeleccionarPerfumes.style.display = 'none'
    let selectionSelecionarIngredientes = document.getElementById('infoIngrediente')
    selectionSelecionarIngredientes.style.display = 'none'
    let selectionSeleccionarProceso = document.getElementById('procesoElab')
    selectionSeleccionarProceso.style.display = 'none'
    let selectionSeleccionarCiencia = document.getElementById('cienciaCreatividad')
    selectionSeleccionarCiencia.style.display = 'flex'
    let selectionSelccionarNosotros = document.getElementById('sobreNosotros')
    selectionSelccionarNosotros.style.display = 'none'

    let selectionSeleccionarInicio = document.getElementById('inicio')
    selectionSeleccionarInicio.style.display = 'none'

    let botonRegresar3 = document.getElementById('boton-regresar3')
    botonRegresar3.addEventListener('click', cargarInfo)
    
}

function cargarNosotros () {
    let selectionSeleccionarInfo = document.getElementById('info')
    selectionSeleccionarInfo.style.display = 'none'
    let selectionSeleccionarPerfumes = document.getElementById('infoPerfumes')
    selectionSeleccionarPerfumes.style.display = 'none'
    let selectionSelecionarIngredientes = document.getElementById('infoIngrediente')
    selectionSelecionarIngredientes.style.display = 'none'
    let selectionSeleccionarProceso = document.getElementById('procesoElab')
    selectionSeleccionarProceso.style.display = 'none'
    let selectionSeleccionarCiencia = document.getElementById('cienciaCreatividad')
    selectionSeleccionarCiencia.style.display = 'none'
    let selectionSelccionarNosotros = document.getElementById('sobreNosotros')
    selectionSelccionarNosotros.style.display = 'flex'

    let selectionSeleccionarInicio = document.getElementById('inicio')
    selectionSeleccionarInicio.style.display = 'none'
    let botonRegresar4 = document.getElementById('boton-regresar4')
    botonRegresar4.addEventListener('click', cargarInfo)
}



function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarPagina)