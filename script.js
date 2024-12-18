// Updated validateAndGenerate function using AND (&&) and OR (||) conditions
function validateAndGenerate(event) {
  event.preventDefault(); // Prevent form submission

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const roadType = document.getElementById("roadType").value;
  const favoriteColor = document.getElementById("favoriteColor").value.trim();
  const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();

  // AND condition example: Check if both first and last name are provided
  if (!firstName || !lastName || !roadType || !favoriteColor || !favoriteAnimal || roadType === "Select Road Type") {
      document.getElementById("result").innerHTML =
          '<div class="alert alert-danger">Please fill out all fields before generating a name!</div>';
      return;
  }

  // OR condition example: Check if either the favorite color or favorite animal is entered
  if (!favoriteColor || !favoriteAnimal) {
      document.getElementById("result").innerHTML =
          '<div class="alert alert-warning">Please fill out your favorite color and animal to get a complete name!</div>';
  }

  // Run Name Generating Functions & store them in new variables
  const prefix = genPrefix(firstName);
  const newFirstName = genFirstName(firstName);
  const middleName = genMiddleName(roadType, favoriteColor);
  const newLastName = genLastName(lastName);
  const suffix = genSuffix(favoriteAnimal);

  // Capitalize Name Variables when needed
  const capitalizedPrefix = capitalize(prefix);
  const capitalizedFirstName = capitalize(newFirstName);
  const capitalizedMiddleName = capitalize(middleName);
  const capitalizedLastName = capitalize(newLastName);

  // Combine all of the Name variables in a new name
  const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`;

  // Display the new name
  document.getElementById("result").innerHTML = `<h3 class="text-success">${fullName}</h3>`;
}

// Generate Suffix using SWITCH CASE for favorite animal
function genSuffix(favoriteAnimal) {
  let suffix;
  switch (favoriteAnimal.toLowerCase()) {
      case "wolf":
          suffix = "of the Wolf Clan";
          break;
      case "eagle":
          suffix = "of the Eagle Tribe";
          break;
      case "dragon":
          suffix = "of the Dragon Clan";
          break;
      case "tiger":
          suffix = "of the Tiger Pride";
          break;
      default:
          suffix = "of the Unknown Clan"; // Default case for unlisted animals
  }
  return suffix;
}

// Helper function to generate Prefix using AND (&&) condition
function genPrefix(firstName) {
  // Example AND condition: If firstName length is greater than 5 AND starts with 'J', return "The Great"
  if (firstName.length > 5 && firstName.charAt(0).toLowerCase() === 'j') {
      return "The Great";
  } else {
      return "Master";
  }
}

// Generate first name using SWITCH CASE
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  switch (firstLetter) {
      case "a":
          return "Jeff";
      case "b":
          return "Pablo";
      case "c":
          return "Alice";
      default:
          return "Julian"; // Default first name for letters not matched
  }
}

// Generate middle name using OR (||) condition
function genMiddleName(roadType, favoriteColor) {
  if (roadType === "road" || roadType === "avenue") { // OR condition: Either road or avenue
      return `${favoriteColor}ridge`; // EX: blue-ridge
  } else if (roadType === "street") {
      return `${favoriteColor}son`; // EX: blue-son
  } else {
      return "of the Unknown"; // Special case for 'other'
  }
}

// Generate last name using SWITCH CASE
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

// Capitalization function
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
