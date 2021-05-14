$(document).ready(function() {
    $("#azul").click(function() {
        //$("h1").hide();
        $("p").css("background-color", "blue")
            .fadeOut()
            .delay(1000)
            .fadeIn();
    });
    $("#vermelho").click(function() {
        //$("h1").hide();
        $("p").css("background-color", "red");
        $("#mensagem")
            .text("Cor alterada com sucesso!")
            .css({ color: "red", border: "1px solid red", backgroundColor: "#F08080" })
            .delay(3000)
            .fadeOut("fast");

    });
});