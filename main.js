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

const winnerHighlightBoxShadow = "0px 8px rgba(189, 194, 214, 0.7) inset, 0 0 0 20px rgba(255, 255, 255, 0.05), 0 0 0 70px rgba(255, 255, 255, 0.03), 0 0 0 120px rgba(255, 255, 255, 0.01)";

let narrowerThan985pxQuery = window.matchMedia("(max-width: 985px)");
narrowerThan985pxQuery.addEventListener("change", adaptOutcomeTableToScreen);
adaptOutcomeTableToScreen();

function shapeSelectedEvent(shape) {
  if(!isValidShapeName(shape)) {
    console.log("Invalid shape name");
    return;
  }
  console.log(shape + " selected");

  let playersShape = shapes[shape];
  let computersShape = Math.floor(Math.random() * 3);
  let computersShapeStr = Object.keys(shapes).find(shape_ => shapes[shape_] === computersShape);

  processOutcome(playersShape, computersShape);
}

function restartGame() {
  sessionStorage.setItem("score", score);
  window.location.reload();
}

function isValidShapeName(shape) {
  return Object.keys(shapes).indexOf(shape) !== -1 ? true : false;
}

function appendChildren(parent, children) {
  let appendedChildren = [];
  for(let i = 0; i < children.length; ++i) {
    appendedChildren.push(parent.appendChild(children[i]));
  }

  return appendedChildren.length === 0 ? null : appendedChildren;
}

function removeChildren(parent) {
  let removedChildren = [];
  while(parent.lastChild) {
    removedChildren.push(parent.removeChild(parent.lastChild));
  }

  return removedChildren.length === 0 ? null : removedChildren;
}

function moveOutcomeAnnounementBelowShapes() {
  outcomeTable = document.getElementById("outcomeTable");
  if(outcomeTable.rows.length === 3) return;
  let newRow = outcomeTable.insertRow(-1);
  newRow.appendChild(document.getElementById("outcomeAnnouncmentCell")).colSpan = "2";
  document.getElementById("blankCellBetweenOutcomeChoiceLabels").style.display = "none";
}

function insertOutcomeAnnounementBetweenShapes() {
  outcomeTable = document.getElementById("outcomeTable");
  if(outcomeTable.rows.length === 2) return;
  outcomeTable.rows[1].cells[0].insertAdjacentElement("afterend", document.getElementById("outcomeAnnouncmentCell")).colSpan = "1";
  outcomeTable.deleteRow(-1);
  document.getElementById("blankCellBetweenOutcomeChoiceLabels").style.display = "";
}

function adaptOutcomeTableToScreen() {
  if(narrowerThan985pxQuery.matches) {
    moveOutcomeAnnounementBelowShapes();
  } else {
    insertOutcomeAnnounementBetweenShapes();
  }
}

function processOutcome(playersShape, computersShape) {
  let playersShapeStr = Object.keys(shapes).find(shape_ => shapes[shape_] === playersShape);
  let computersShapeStr = Object.keys(shapes).find(shape_ => shapes[shape_] === computersShape);

  document.getElementById("shapeChoiceTable").style.display = "none";
  document.getElementById("outcomeTable").style.visibility = "visible";

  document.getElementById("playersShape").src = "images/icon-" + playersShapeStr.toLowerCase() + ".svg";
  document.getElementById("playersShapeBorder").style.borderColor = shapeOutlineColors[playersShapeStr];

  setTimeout(function() {
    document.getElementById("computersShape_div").classList.add("shapeDoubleBorder");
    document.getElementById("computersShape_div").classList.remove("shapePlaceholder");
    document.getElementById("computersShape").src = "images/icon-" + computersShapeStr.toLowerCase() + ".svg";
    document.getElementById("computersShape_div").style.borderColor = shapeOutlineColors[computersShapeStr];
    document.getElementById("computersShape").style.display = "";
  }, 500);

  if (computersShape === playersShape) {
    console.log("Stalemate. Computer chose " + computersShape + ", the player chose " + playersShape);
    document.getElementById("outcomeAnnouncment").innerHTML = "STALEMATE";
  } else if (computersShape === shapeThatIsBeatenBy[playersShapeStr]) {
    console.log("Player wins. Computer chose " + computersShape + ", the player chose " + playersShape);
    document.getElementById("outcomeAnnouncment").innerHTML = "YOU WIN";
    setTimeout(function() {
      document.getElementById("score").innerHTML = ++score;
      document.getElementById("playersShapeBorder").style.boxShadow = winnerHighlightBoxShadow;
    }, 1400);
  } else {
    console.log("Computer wins. Computer chose " + computersShape + ", the player chose " + playersShape);
    document.getElementById("outcomeAnnouncment").innerHTML = "YOU LOSE";
    setTimeout(function() {
      document.getElementById("score").innerHTML = --score;
      document.getElementById("computersShape_div").style.boxShadow = winnerHighlightBoxShadow;
    }, 1400);
  }

  setTimeout(function() {
    document.getElementById("outcomeAnnouncmentCell").classList.add("scaleIn");
  }, 700);
}
