$(document).ready(function () {
    $("body").css("background-color", "azure");
    $("h1").click(function () {
      $(this).hide();
    });
  
    $(".buton1").click(function () {
      let selectZona = $(".selectZone option:selected").text();
      let selectTimp = $(".selectTime option:selected").text();
  
      let pretAfisat = "";
  
      const arrayPret = [
        ["2.5 Lei", "5 Lei", "10 Lei"],
        ["15 Lei", "38 Lei", "75 Lei"],
        ["60 Lei", "150 Lei", "300 Lei"],
        ["210 Lei", "525 Lei", "1050 Lei"],
        ["1050 Lei", "2625 Lei", "5250 Lei"],
        ["1890 Lei", "4725 Lei", "9450 Lei"],
      ];
  
      const arrayZona = ["Zona 0", "Zona 1", "Zona 2"];
  
      const arrayTimp = [
        "O ora",
        "O zi",
        "O saptamana",
        "O luna",
        "Un semestru",
        "Un an",
      ];
  
      if (selectZona == arrayZona[0]) {
        switch (selectTimp) {
          case arrayTimp[0]:
            pretAfisat = arrayPret[0][2];
            break;
          case arrayTimp[1]:
            pretAfisat = arrayPret[1][2];
            break;
          case arrayTimp[2]:
            pretAfisat = arrayPret[2][2];
            break;
          case arrayTimp[3]:
            pretAfisat = arrayPret[3][2];
            break;
          case arrayTimp[4]:
            pretAfisat = arrayPret[4][2];
            break;
          case arrayTimp[5]:
            pretAfisat = arrayPret[5][2];
            break;
        }
      } else if (selectZona == arrayZona[1]) {
        switch (selectTimp) {
          case arrayTimp[0]:
            pretAfisat = arrayPret[0][1];
            break;
          case arrayTimp[1]:
            pretAfisat = arrayPret[1][1];
            break;
          case arrayTimp[2]:
            pretAfisat = arrayPret[2][1];
            break;
          case arrayTimp[3]:
            pretAfisat = arrayPret[3][1];
            break;
          case arrayTimp[4]:
            pretAfisat = arrayPret[4][1];
            break;
          case arrayTimp[5]:
            pretAfisat = arrayPret[5][1];
            break;
        }
      } else if (selectZona == arrayZona[2]) {
        switch (selectTimp) {
          case arrayTimp[0]:
            pretAfisat = arrayPret[0][0];
            break;
          case arrayTimp[1]:
            pretAfisat = arrayPret[1][0];
            break;
          case arrayTimp[2]:
            pretAfisat = arrayPret[2][0];
            break;
          case arrayTimp[3]:
            pretAfisat = arrayPret[3][0];
            break;
          case arrayTimp[4]:
            pretAfisat = arrayPret[4][0];
            break;
          case arrayTimp[5]:
            pretAfisat = arrayPret[5][0];
            break;
        }
      } else {
        return "nimic";
      }
  
      $(".zonaAfisata").text(selectZona);
      $(".timpAfisat").text(selectTimp);
  
      $(".pretFinal").text(pretAfisat);
    });
  
    // Alta linie cu evenimente similare facuta in ES6 - operatorul ternary si arrow function la discretie
  
    $(".buton2").click(function () {
      // zona evenimentului de click pe al doilea buton
      let selectZonaa = $(".selectZonaa option:selected").text();
      let selectTimpp = $(".selectTimpp option:selected").text();
      let pretAfisatt = 1;
      // 1 singur array. simulare baza de date
  
      const arrayTabel = [
        [1, "Zona 0", "Zona 1", "Zona 2"],
        ["O ora", 10, 5, 2.5],
        ["O zi", 75, 38, 15],
        ["O saptamana", 300, 150, 60],
        ["O luna", 1050, 525, 210],
        ["Un semestru", 5250, 2625, 1050],
        ["Un an", 9450, 4725, 1890],
      ];
  
      function calculatorPret() {
        if (selectZonaa == arrayTabel[0][1]) {
          return selectTimpp == arrayTabel[1][0]
            ? (pretAfisatt = arrayTabel[1][1])
            : selectTimpp == arrayTabel[2][0]
            ? (pretAfisatt = arrayTabel[2][1])
            : selectTimpp == arrayTabel[3][0]
            ? (pretAfisatt = arrayTabel[3][1])
            : selectTimpp == arrayTabel[4][0]
            ? (pretAfisatt = arrayTabel[4][1])
            : selectTimpp == arrayTabel[5][0]
            ? (pretAfisatt = arrayTabel[5][1])
            : selectTimpp == arrayTabel[6][0]
            ? (pretAfisatt = arrayTabel[6][1])
            : "nimic";
        } else if (selectZonaa == arrayTabel[0][2]) {
          return selectTimpp == arrayTabel[1][0]
            ? (pretAfisatt = arrayTabel[1][2])
            : selectTimpp == arrayTabel[2][0]
            ? (pretAfisatt = arrayTabel[2][2])
            : selectTimpp == arrayTabel[3][0]
            ? (pretAfisatt = arrayTabel[3][2])
            : selectTimpp == arrayTabel[4][0]
            ? (pretAfisatt = arrayTabel[4][2])
            : selectTimpp == arrayTabel[5][0]
            ? (pretAfisatt = arrayTabel[5][2])
            : selectTimpp == arrayTabel[6][0]
            ? (pretAfisatt = arrayTabel[6][2])
            : "nimic";
        } else if (selectZonaa == arrayTabel[0][3]) {
          return selectTimpp == arrayTabel[1][0]
            ? (pretAfisatt = arrayTabel[1][3])
            : selectTimpp == arrayTabel[2][0]
            ? (pretAfisatt = arrayTabel[2][3])
            : selectTimpp == arrayTabel[3][0]
            ? (pretAfisatt = arrayTabel[3][3])
            : selectTimpp == arrayTabel[4][0]
            ? (pretAfisatt = arrayTabel[4][3])
            : selectTimpp == arrayTabel[5][0]
            ? (pretAfisatt = arrayTabel[5][3])
            : selectTimpp == arrayTabel[6][0]
            ? (pretAfisatt = arrayTabel[6][3])
            : "nimic";
        } else {
          return pretAfisatt;
        }
      }
  
      calculatorPret();
  
      $(".costFinal").text(pretAfisatt);
    });
  
    $(".buton3").click(function () {
      window.location.href = "signUp.html"; // window - fereastra afisata in browser; location.href este referinta catre fisierul afisat
    });
  
    $(".buton4").click(function () {
      window.location.href = "index.html";
    });
  
    const arrayUser = [];
  
    $(".buton5").click(function () {
      let prenume = $(".prenume").val();
      let nume = $("#nume").val();
      let email = $("#email").val();
      let pswd = $("#pwd").val();
  
      arrayUser.push(prenume);
      arrayUser.push(nume);
      arrayUser.push(email);
      arrayUser.push(pswd);
  
      alert(arrayUser);
    });
  
    $(".buton6").click(function () {
      let emailCheck = $("#emailCheck").val();
      let pwdCheck = $("#pwdCheck").val();
      if (emailCheck === arrayUser[2] && pwdCheck === arrayUser[3]) {
        alert("Datele de logare sunt corecte");
        window.location.href = "user.html";
      } else {
        alert("Email sau Parola gresite");
      }
    });
  
    // Limita de jos a evenimentului de load
  });