# language: es

@Regression
Característica: Mostrar Hola Mundo

  Escenario: Mostrar el mensaje de bienvenida
    Dado que estoy en la página principal
    Cuando la página carga
    Entonces debería ver "Hola Mundo"

