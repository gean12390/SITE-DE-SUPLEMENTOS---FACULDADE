document.getElementById('pesquisa').addEventListener('keypress', function (event) {
    let pesquisar = document.getElementById('pesquisa').value.toLowerCase();

    if (event.key == 'Enter') {

        if (pesquisar == "creatina") {
            alert();
        } else if (pesquisar == "whey") {
            alert("Nenhum resultado encontrado")
        } else {
            alert("Nenhum resultado encontrado")
        }

    }

});