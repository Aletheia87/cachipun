var piedra = 0;
var papel = 1;
var tijera = 2;
var opcion = 0;
var cantidad = prompt('¿Cuántas veces deseas jugar?');


do {
    var opcionU = parseInt(prompt('¿Qué deseas elegir? \n Piedra: 0\n Papel: 1\n Tijera: 2'));
    var opcionM = Math.floor(Math.random() * 3);
    if (opcionU == piedra) {
        alert('Elegiste Piedra');
        if (opcionM == piedra) {
            alert('La máquina eligió Piedra');
            alert('Empate');
        }
        else if (opcionM == papel) {
            alert('La máquina eligió Papel');
            alert('Perdiste :(');
        }
        else if (opcionM == tijera) {
            alert('La máquina eligió Tijera');
            alert('Ganaste :)');
        }
    }

    else if (opcionU == papel) {
        alert('Elegiste Papel');
        if (opcionM == papel) {
            alert('La máquina eligió Papel');
            alert('Empate');
        }
        else if (opcionM == piedra) {
            alert('La máquina eligió Piedra');
            alert('Ganaste');
        }
        else if (opcionM == tijera) {
            alert('La máquina eligió Tijera');
            alert('Perdiste');
        }
    }

    else if (opcionU == tijera) {
        alert('Elegiste Tijera');
        if (opcionM == tijera) {
            alert('La máquina eligió Tijera');
            alert('Empate');
        }
        else if (opcionM == piedra) {
            alert('La máquina eligió Piedra');
            alert('Perdiste');
        }
        else if (opcionM == papel) {
            alert('La máquina eligió Papel');
            alert('Ganaste');
        }
    }

    else {
        alert('Ingrese una opción válida');
    }

    opcion++
} while (opcion < cantidad);