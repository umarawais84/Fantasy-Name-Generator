//Generate Prefix
function genPrefix(firstName) {
  if (firstName.length > 5) {
    return "The Great";
  } else {
    return "Master";
  }
}

//generate first name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  switch (firstLetter) {
    case "a":
      return "Jeff";
    case "b":
      return "Pablo";
    default:
      return "Julian";
  }
}

//generate middle name
function genMiddleName(roadType, favoriteColor) {
  switch (roadType) {
    case "road":
      return `${favoriteColor}ridge`; //EX:  blueridge
    case "street":
      return `${favoriteColor}son`; //EX: blueson
    case "other":
      return "of the Unknown"; // Special case
    default:
      return `${favoriteColor}stone`; //EX: bluestone
  }
}

//generate Last Name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  switch (lastLetter) {
    case "a":
      return "Shadow";
    case "e":
      return "Storm";
    case "i":
      return "Blaze";
    case "o":
      return "Thorn";
    case "u":
      return "Frost";
    default:
      return "Moon"; // Default last name for letters not matched
  }
}

//generate Suffix
function genSuffix(favoriteAnimal) {
  return `of ${favoriteAnimal} clan.`;
}

// Validate inputs and Generate Name
function validateAndGenerate(event) {
  event.preventDefault(); // Prevent form submission
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const roadType = document.getElementById("roadType").value;
  const favoriteColor = document.getElementById("favoriteColor").value.trim();
  const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();

  if (!firstName || !lastName || !roadType || !favoriteColor || !favoriteAnimal || roadType === "Select Road Type") {
    document.getElementById("result").innerHTML =
      '<div class="alert alert-danger">Please fill out all fields before generating a name!</div>';
    return;
  }

  //Run Name Generating Functions & store them in new variables
  const prefix = genPrefix(firstName);
  const newFirstName = genFirstName(firstName);
  const middleName = genMiddleName(roadType, favoriteColor);
  const newLastName = genLastName(lastName);
  const suffix = genSuffix(favoriteAnimal);

  //Capitalize Name Variables when needed
  const capitalizedPrefix = capitalize(prefix);
  const capitalizedFirstName = capitalize(newFirstName);
  const capitalizedMiddleName = capitalize(middleName);
  const capitalizedLastName = capitalize(newLastName);

  //Combine all of the Name variables in a new name
  const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`;
  console.log(fullName);
  //Display the new name
  document.getElementById("result").innerHTML = `<h3 class="text-success">${fullName}</h3>`;
}

//Capitalization Function
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}