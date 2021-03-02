const shapes = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2
}

const shapeThatIsBeatenBy = {
  ROCK: shapes.SCISSORS,
  PAPER: shapes.ROCK,
  SCISSORS: shapes.PAPER
}

const shapeOutlineColors = {
  ROCK: "hsl(349, 71%, 52%)",
  PAPER: "hsl(230, 89%, 62%)",
  SCISSORS: "hsl(39, 89%, 49%)"
}

var score;
if (sessionStorage.getItem("score") !== null) score = sessionStorage.getItem("score");
else score = 0;
document.getElementById("score").innerHTML = score;

function rockSelectedEvent() {
  console.log("Rock selected");

  let playersShape = shapes.ROCK;
  let computersShape = Math.floor(Math.random() * 3);

  document.getElementById("shapeChoiceTable").style.display = "none";
  document.getElementById("outcomeTable").style.visibility = "visible";

  document.getElementById("playersShape").src = "images/icon-rock.svg";
  document.getElementById("playersShapeBorder").style.borderColor = "hsl(349, 71%, 52%)";

  setTimeout(function() {
    document.getElementsByClassName("computersShapeCircle")[0].classList.add("doubleBorder");
    document.getElementsByClassName("computersShapeCircle")[0].classList.remove("computersShapeCircle");
    document.getElementById("computersShape").src = "images/icon-" + Object.keys(shapes).find(shape => shapes[shape] === computersShape).toLowerCase() + ".svg";
    document.getElementById("computersShape_div").style.borderColor = shapeOutlineColors[Object.keys(shapes).find(shape => shapes[shape] === computersShape)];
    document.getElementById("computersShape").style.display = "";
  }, 500);


  if (computersShape === playersShape) {
    console.log("Stalemate. Computer chose " + computersShape + ", the player chose " + playersShape);
    document.getElementById("outcomeAnnouncment").innerHTML = "STALEMATE";
  } else if (computersShape === shapeThatIsBeatenBy.ROCK) {
    console.log("Player wins. Computer chose " + computersShape + ", the player chose " + playersShape);
    document.getElementById("outcomeAnnouncment").innerHTML = "YOU WIN";
    setTimeout(function() {
      document.getElementById("playersShapeBorder").style.boxShadow = "0px 8px rgba(189, 194, 214, 0.7) inset, 0 0 0 20px rgba(255, 255, 255, 0.05), 0 0 0 70px rgba(255, 255, 255, 0.03), 0 0 0 120px rgba(255, 255, 255, 0.01)";
    }, 1500);
    document.getElementById("score").innerHTML = ++score;
  } else {
    console.log("Computer wins. Computer chose " + computersShape + ", the player chose " + playersShape);
    document.getElementById("outcomeAnnouncment").innerHTML = "YOU LOSE";
    setTimeout(function() {
      document.getElementById("computersShape_div").style.boxShadow = "0px 8px rgba(189, 194, 214, 0.7) inset, 0 0 0 20px rgba(255, 255, 255, 0.05), 0 0 0 70px rgba(255, 255, 255, 0.03), 0 0 0 120px rgba(255, 255, 255, 0.01)";
    }, 1500);
    document.getElementById("score").innerHTML = --score;
  }

  document.getElementById("outcomeAnnouncmentCell").classList.add("scaleIn");
}

function paperSelectedEvent() {
  console.log("Paper selected");

  let playersShape = shapes.PAPER;
  let computersShape = Math.floor(Math.random() * 3);

  document.getElementById("shapeChoiceTable").style.display = "none";
  document.getElementById("outcomeTable").style.visibility = "visible";

  document.getElementById("playersShape").src = "images/icon-paper.svg";
  document.getElementById("playersShapeBorder").style.borderColor = "hsl(230, 89%, 62%)";

  setTimeout(function() {
    document.getElementsByClassName("computersShapeCircle")[0].classList.add("doubleBorder");
    document.getElementsByClassName("computersShapeCircle")[0].classList.remove("computersShapeCircle");
    document.getElementById("computersShape").src = "images/icon-" + Object.keys(shapes).find(shape => shapes[shape] === computersShape).toLowerCase() + ".svg";
    document.getElementById("computersShape_div").style.borderColor = shapeOutlineColors[Object.keys(shapes).find(shape => shapes[shape] === computersShape)];
    document.getElementById("computersShape").style.display = "";
  }, 500);


  if (computersShape === playersShape) {
    console.log("Stalemate. Computer chose " + computersShape + ", the player chose " + playersShape);
    document.getElementById("outcomeAnnouncment").innerHTML = "STALEMATE";
  } else if (computersShape === shapeThatIsBeatenBy.ROCK) {
    console.log("Player wins. Computer chose " + computersShape + ", the player chose " + playersShape);
    document.getElementById("outcomeAnnouncment").innerHTML = "YOU WIN";
    setTimeout(function() {
      document.getElementById("playersShapeBorder").style.boxShadow = "0px 8px rgba(189, 194, 214, 0.7) inset, 0 0 0 20px rgba(255, 255, 255, 0.05), 0 0 0 70px rgba(255, 255, 255, 0.03), 0 0 0 120px rgba(255, 255, 255, 0.01)";
    }, 1500);
    document.getElementById("score").innerHTML = ++score;
  } else {
    console.log("Computer wins. Computer chose " + computersShape + ", the player chose " + playersShape);
    document.getElementById("outcomeAnnouncment").innerHTML = "YOU LOSE";
    setTimeout(function() {
      document.getElementById("computersShape_div").style.boxShadow = "0px 8px rgba(189, 194, 214, 0.7) inset, 0 0 0 20px rgba(255, 255, 255, 0.05), 0 0 0 70px rgba(255, 255, 255, 0.03), 0 0 0 120px rgba(255, 255, 255, 0.01)";
    }, 1500);
    document.getElementById("score").innerHTML = --score;
  }

  document.getElementById("outcomeAnnouncmentCell").classList.add("scaleIn");
}

function scissorsSelectedEvent() {
  console.log("Scissors selected");

  let playersShape = shapes.SCISSORS;
  let computersShape = Math.floor(Math.random() * 3);

  document.getElementById("shapeChoiceTable").style.display = "none";
  document.getElementById("outcomeTable").style.visibility = "visible";

  document.getElementById("playersShape").src = "images/icon-scissors.svg";
  document.getElementById("playersShapeBorder").style.borderColor = "hsl(39, 89%, 49%)";

  setTimeout(function() {
    document.getElementsByClassName("computersShapeCircle")[0].classList.add("doubleBorder");
    document.getElementsByClassName("computersShapeCircle")[0].classList.remove("computersShapeCircle");
    document.getElementById("computersShape").src = "images/icon-" + Object.keys(shapes).find(shape => shapes[shape] === computersShape).toLowerCase() + ".svg";
    document.getElementById("computersShape_div").style.borderColor = shapeOutlineColors[Object.keys(shapes).find(shape => shapes[shape] === computersShape)];
    document.getElementById("computersShape").style.display = "";
  }, 500);


  if (computersShape === playersShape) {
    console.log("Stalemate. Computer chose " + computersShape + ", the player chose " + playersShape);
    document.getElementById("outcomeAnnouncment").innerHTML = "STALEMATE";
  } else if (computersShape === shapeThatIsBeatenBy.ROCK) {
    console.log("Player wins. Computer chose " + computersShape + ", the player chose " + playersShape);
    document.getElementById("outcomeAnnouncment").innerHTML = "YOU WIN";
    setTimeout(function() {
      document.getElementById("playersShapeBorder").style.boxShadow = "0px 8px rgba(189, 194, 214, 0.7) inset, 0 0 0 20px rgba(255, 255, 255, 0.05), 0 0 0 70px rgba(255, 255, 255, 0.03), 0 0 0 120px rgba(255, 255, 255, 0.01)";
    }, 1500);
    document.getElementById("score").innerHTML = ++score;
  } else {
    console.log("Computer wins. Computer chose " + computersShape + ", the player chose " + playersShape);
    document.getElementById("outcomeAnnouncment").innerHTML = "YOU LOSE";
    setTimeout(function() {
      document.getElementById("computersShape_div").style.boxShadow = "0px 8px rgba(189, 194, 214, 0.7) inset, 0 0 0 20px rgba(255, 255, 255, 0.05), 0 0 0 70px rgba(255, 255, 255, 0.03), 0 0 0 120px rgba(255, 255, 255, 0.01)";
    }, 1500);
    document.getElementById("score").innerHTML = --score;
  }

  document.getElementById("outcomeAnnouncmentCell").classList.add("scaleIn");
}

function restartGame() {
  sessionStorage.setItem("score", score);
  window.location.reload(false);
}
