var persona = {
    nombre: ['Maisi', 'Fabbro'],
    edad: 25,
    genero: 'Masculino',
    intereses: ['CSGO', 'Futbol'],
    bio: function () {
        alert('Hola! Me llamo ' + this.nombre[0] + ' ' + this.nombre[1] + ' y tengo ' + this.edad + ' años. Le gusta el ' + this.intereses[0] + ' y también el ' + this.intereses[1])
    },
    saludo: function () {
        alert('Hola!, Yo soy ' + this.nombre[0])
    }
}

persona.bio();

// !Esto es un objeto literal, porque se ha escrito cada parte del contenido por nuestra cuenta a diferencia de un objeto instanciado