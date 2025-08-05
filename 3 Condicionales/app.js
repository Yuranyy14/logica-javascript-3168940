var estatura = parseFloat(prompt("¿Cuál es su estatura en cm?"));
var velocidad = parseFloat(prompt("¿Cuál es tu velocidad en km/h?"));
var edad = parseInt(prompt("¿Cuál es tu edad?"));

if (estatura >= 170 && velocidad >= 27) {
    alert("Cumples con los requisitos para ingresar al equipo");

    if (edad < 18) {
        alert("Irás a las divisiones menores");
    } else {
        alert("Irás al equipo profesional");
    }
} else {
    alert("No cumples con los requisitos para ingresar al equipo");
}
