const ContadorElement = document.getElementById('Contador')
const IncrementarElement = document.getElementById('Incrementar')

async function ActualizarContador(){
    const response = await fetch('/contador');
    const data = await response.json();
    ContadorElement.textContent = data.contador;
}

async function IncrementarContador() 
{
    try
    {
    await fetch('/incrementar', {method: 'GET'});
    ActualizarContador();
    } catch (error){
        console.log('Error al incrementar :', error);
    }
}

IncrementarElement.addEventListener('click', IncrementarContador);
ActualizarContador();