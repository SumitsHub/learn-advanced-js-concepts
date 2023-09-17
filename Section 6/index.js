var g = G$("John", "Doe");
g.greet().setLang("es").greet(true);

$("#login").click(function () {
  var loginGreeter = G$("John", "Doe");

  $("#logindiv").hide();

  loginGreeter.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
