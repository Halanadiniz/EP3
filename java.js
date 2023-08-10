    //inicializando um dado de nome de variável
    var data = 0;
    //imprimindo o valor padrão dos dados que é 0 na tag h2
    document.getElementById("counting").innerText = data; 
    //criação da função de incremento
    function increment() {
        data = data + 1;
        document.getElementById("counting").innerText = data;
    }
    //criação da função de decremento
    function decrement() {
        data = data - 1;
        document.getElementById("counting").innerText = data;
    }
    $('.menu').click(function() {
    $('.meen ul .itenbtn').toggleClass('mostra');
    });