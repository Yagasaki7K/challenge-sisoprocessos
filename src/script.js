var objLogin = [
	{ // Object @ 0 index
		username: "anderson18_marlon@hotmail.com",
        password: "499217391Aa"
        
	},
	{ // Object @ 1 index
		username: "admin",
		password: "admin"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	}
]

function getInfo() {
	var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

	for(var i = 0; i < objLogin.length; i++) {
		if(username == objLogin[i].username && password == objLogin[i].password) {
            window.location.href="pages/dashboard.html";
            document.querySelector('.results').innerHTML = 'Hello World!';
			return
		}
	}
	alert("Não foi possível entrar. Por favor, verifique se login e password estão corretos.")
}

function CloseFormCine() {
	if (window.confirm("Não terá como alterar. Tudo bem enviar esse requisito?")) {
		alert("Requisito enviado!");
		location.reload();
	  }
	  else { window.alert('OK. Nenhuma ação foi feita!') }
	}

function CloseFormManager() {
		if (window.confirm("Não terá como alterar. Tudo bem enviar esse requisito?")) {
			alert("Requisito enviado!");
			alert("O ID do Gerente é: " + Math.floor(Math.random() * 999));
			location.reload();
		  }
		  else { window.alert('OK. Nenhuma ação foi feita!') }
		}

function JSUpload() {
	var x = document.getElementById("btnUpload");
		if (x.style.display === "block") {
		  x.style.display = "none";
		} else {
		  x.style.display = "block";
		}
	  }

function JSEdits() {
	var person = prompt("Informe o número do DOC", "");

	if (person >= 1) {
		window.location.href="../docs/doc1.docx";
		} else { location.reload(); }
}

function JSExports() {
	var person = prompt("Informe o número do DOC", "");

	if (person >= 1) {
	window.location.href="../docs/doc1.pdf";
	} else { location.reload(); }
}