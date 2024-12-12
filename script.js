//Generate Prefix
function genPrefix(firstName) {
  if (firstName.length > 5) {
    return "The Great";
  } else {
    return "Master";
  }
}

//Generate first name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  if (firstLetter === "a") {
    return "Jeff";
  } else if (firstLetter === "a") {
    return "Pablo";
  } else {
    return "Julian";
  }
}

//Generate middle name
function genMiddleName(roadType, favoriteColor) {
  if (roadType === "road") {
    return `${favoriteColor}ridge`; //EX: Blueridge
  } else if (roadType === "street") {
    return `${favoriteColor}son`;
  } else {
    return `${favoriteColor}stone`;
  }
}

//Generate last name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1);
  if (lastLetter === "a") {
    return "shadow";
  } else if (lastLetter === "e") {
    return "Storm";
  } else {
    return "Moon";
  }
}

//Generate suffix
function genSuffix(favAnimal) {
  return `of ${favAnimal} clan.`;
}

//Master Name Building Function
function genFullName() {
  //Get the Users Inputs from HTML Elements
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const roadType = document.getElementById("roadType").value.trim();
  const favoriteColor = document.getElementById("favoriteColor").value.trim();
  const favAnimal = document.getElementById("favAnimal").value.trim();
  //Run Name Generating Functions & sore them in new variables
  const prefix = capitalize(firstName);
  const newFirstName = genPrefix(firstName);
  const middleName = genPrefix(roadType, favoriteColor);
  const newLastName = genPrefix(lastName);
  const suffix = genPrefix(favAnimal);


  const capitilizedPrefix = capitalize(firstName);
  const capitilizenewFirstName = capitalize(firstName);
  const capitilizemiddleName = capitalize(roadType, favoriteColor);
  const capitilizenewLastName = capitalize(lastName);
  const capitilizesuffix = capitalize(favAnimal);
  //Capitalize Name Variables when needed

  //Combine all of the Name variables in a new name

  //Display the new name
}

//Capitalization Function
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
