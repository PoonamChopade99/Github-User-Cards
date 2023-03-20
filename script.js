fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data[28]);

    //-----------------------------------------------------------1----------------------------------------------------------------------------------
    document
      .getElementById("profileImg1")
      .setAttribute("src", data[28].avatar_url);

    document.getElementById("userName1").innerText = data[28].login;

    document
      .getElementById("visitProfile1")
      .setAttribute("href", data[28].html_url);

    //-----------------------------------------------------------2----------------------------------------------------------------------------------
    document
      .getElementById("profileImg2")
      .setAttribute("src", data[29].avatar_url);

    document.getElementById("userName2").innerText = data[29].login;

    document
      .getElementById("visitProfile2")
      .setAttribute("href", data[29].html_url);

    //-----------------------------------------------------------3----------------------------------------------------------------------------------
    document
      .getElementById("profileImg3")
      .setAttribute("src", data[2].avatar_url);

    document.getElementById("userName3").innerText = data[2].login;

    document
      .getElementById("visitProfile3")
      .setAttribute("href", data[2].html_url);

    //-----------------------------------------------------------4----------------------------------------------------------------------------------
    document
      .getElementById("profileImg4")
      .setAttribute("src", data[3].avatar_url);

    document.getElementById("userName4").innerText = data[3].login;

    document
      .getElementById("visitProfile4")
      .setAttribute("href", data[3].html_url);

    //-----------------------------------------------------------5----------------------------------------------------------------------------------
    document
      .getElementById("profileImg5")
      .setAttribute("src", data[1].avatar_url);

    document.getElementById("userName5").innerText = data[1].login;

    document
      .getElementById("visitProfile5")
      .setAttribute("href", data[1].html_url);

    //-----------------------------------------------------------6----------------------------------------------------------------------------------
    document
      .getElementById("profileImg6")
      .setAttribute("src", data[9].avatar_url);

    document.getElementById("userName6").innerText = data[9].login;

    document
      .getElementById("visitProfile6")
      .setAttribute("href", data[9].html_url);

    //-----------------------------------------------------------7----------------------------------------------------------------------------------
    document
      .getElementById("profileImg7")
      .setAttribute("src", data[12].avatar_url);

    document.getElementById("userName7").innerText = data[12].login;

    document
      .getElementById("visitProfile7")
      .setAttribute("href", data[12].html_url);

    //-----------------------------------------------------------8----------------------------------------------------------------------------------
    document
      .getElementById("profileImg8")
      .setAttribute("src", data[13].avatar_url);

    document.getElementById("userName8").innerText = data[13].login;

    document
      .getElementById("visitProfile8")
      .setAttribute("href", data[13].html_url);

    //-----------------------------------------------------------9----------------------------------------------------------------------------------
    document
      .getElementById("profileImg9")
      .setAttribute("src", data[11].avatar_url);

    document.getElementById("userName9").innerText = data[11].login;

    document
      .getElementById("visitProfile9")
      .setAttribute("href", data[11].html_url);

    //-----------------------------------------------------------10----------------------------------------------------------------------------------
    document
      .getElementById("profileImg10")
      .setAttribute("src", data[18].avatar_url);

    document.getElementById("userName10").innerText = data[18].login;

    document
      .getElementById("visitProfile10")
      .setAttribute("href", data[18].html_url);

    //-----------------------------------------------------------11----------------------------------------------------------------------------------
    document
      .getElementById("profileImg11")
      .setAttribute("src", data[10].avatar_url);

    document.getElementById("userName11").innerText = data[10].login;

    document
      .getElementById("visitProfile11")
      .setAttribute("href", data[10].html_url);

    //-----------------------------------------------------------12----------------------------------------------------------------------------------
    document
      .getElementById("profileImg12")
      .setAttribute("src", data[25].avatar_url);

    document.getElementById("userName12").innerText = data[25].login;

    document
      .getElementById("visitProfile12")
      .setAttribute("href", data[25].html_url);
  });
