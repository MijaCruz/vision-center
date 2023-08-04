function mostrar() {
    var nom = document.form1.nombre.value;
    var apll = document.form1.apellidos.value;
    var ed = document.form1.edad.value;
    var dr = document.form1.direccion.value;
    var gm = document.form1.correo.value;
    var pg = document.form1.pago.value;
    var num = document.form1.celular.value;

    if (nom == "" || apll == "" || ed == "" || dr == "" || gm == "" || pg == "" || num == "") {
        alert('Faltan algunos datos por completar');
    } else {
        alert('¡Su compra fue hecha con exito! \n Pronto llegará su pedido a casa');
    }
}