
var b1 = document.getElementById("c1");
var b2 = document.getElementById("c2");
var b3 = document.getElementById("c3");
var b4 = document.getElementById("c4");
var b5 = document.getElementById("c5");
var b6 = document.getElementById("c6");
var b7 = document.getElementById("c7");
var b8 = document.getElementById("c8");
var b9 = document.getElementById("c9");
var b10 = document.getElementById("c10");

var count = 0;

var b1enabled = true;
var b2enabled = true;
var b3enabled = true;
var b4enabled = true;
var b5enabled = true;
var b6enabled = true;
var b7enabled = true;
var b8enabled = true;
var b9enabled = true;
var b10enabled = true;

var counter = document.getElementById("countertext");

b1.onclick = function() {
  if (count > 9) {
  	counter.innerHTML = "everything found";
  	b1enabled = false;
  } else if (b1enabled == true) {
	  count += 1;
	  b1.style.opacity = "0.3";
	  counter.innerHTML = "count: " + count;
	  b1enabled = false;
  }
   if (count >9) {
    counter.innerHTML = "everything found";
    b1enabled = false;

  }
};

b2.onclick = function() {
  if (count >9) {
  	console.log("everything found");
  	counter.innerHTML = "everything found";
  	b2enabled = false;
  } else if (b2enabled == true) {
	  count += 1;
	  b2.style.opacity = "0.3";
	  console.log(count);
	  counter.innerHTML = "count: " + count;
	  b2enabled = false;
  }
  if (count >9) {
    console.log("everything found");
    counter.innerHTML = "everything found";
    b2enabled = false;
  }
};

b3.onclick = function() {
  if (count >9) {
  	console.log("everything found");
  	counter.innerHTML = "everything found";
  	b3enabled = false;
  } else if (b3enabled == true)  {
	  count += 1;
	  b3.style.opacity = "0.3";
	  console.log(count);
	  counter.innerHTML = "count: " + count;
	  b3enabled = false;
  }
  if (count >9) {
    console.log("everything found");
    counter.innerHTML = "everything found";
    b3enabled = false;
  }
};

b4.onclick = function() {
  if (count >9) {
  	console.log("everything found");
  	counter.innerHTML = "everything found";
  	b4enabled = false;
  } else if (b4enabled == true) {
	  count += 1;
	  b4.style.opacity = "0.3";
	  console.log(count);
	  counter.innerHTML = "count: " + count;
	  b4enabled = false;
  }
  if (count >9) {
    console.log("everything found");
    counter.innerHTML = "everything found";
    b4enabled = false;

  }
};

b5.onclick = function() {
  if (count >9) {
    counter.innerHTML = "everything found";
    b5enabled = false;
  } else if (b5enabled == true) {
    count += 1;
    b5.style.opacity = "0.3";
    counter.innerHTML = "count: " + count;
    b5enabled = false;
  }
  if (count >9) {
    counter.innerHTML = "everything found";
    b5enabled = false;

  }
};

b6.onclick = function() {
  if (count >9) {
    counter.innerHTML = "everything found";
    b6enabled = false;
  } else if (b6enabled == true) {
    count += 1;
    b6.style.opacity = "0.3";
    counter.innerHTML = "count: " + count;
    b6enabled = false;
  }
  if (count >9) {
    counter.innerHTML = "everything found";
    b6enabled = false;

  }
};

b7.onclick = function() {
  if (count >9) {
    counter.innerHTML = "everything found";
    b7enabled = false;
  } else if (b7enabled == true) {
    count += 1;
    b7.style.opacity = "0.3";
    counter.innerHTML = "count: " + count;
    b7enabled = false;
  }
  if (count >9) {
    counter.innerHTML = "everything found";
    b7enabled = false;

  }
};

b8.onclick = function() {
  if (count >9) {
    counter.innerHTML = "everything found";
    b8enabled = false;
  } else if (b8enabled == true) {
    count += 1;
    b8.style.opacity = "0.3";
    counter.innerHTML = "count: " + count;
    b8enabled = false;
  }
  if (count >9) {
    counter.innerHTML = "everything found";
    b8enabled = false;

  }
};

b9.onclick = function() {
  if (count >9) {
    counter.innerHTML = "everything found";
    b9enabled = false;
  } else if (b9enabled == true) {
    count += 1;
    b9.style.opacity = "0.3";
    counter.innerHTML = "count: " + count;
    b9enabled = false;
  }
  if (count >9) {
    counter.innerHTML = "everything found";
    b9enabled = false;

  }
};

b10.onclick = function() {
  if (count >9) {
    counter.innerHTML = "everything found";
    b10enabled = false;
  } else if (b10enabled == true) {
    count += 1;
    b10.style.opacity = "0.3";
    counter.innerHTML = "count: " + count;
    b10enabled = false;
  }
  if (count >9) {
    counter.innerHTML = "everything found";
    b10enabled = false;

  }
};



