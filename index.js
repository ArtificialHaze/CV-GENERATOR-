function addNewWorkExperience() {
  let newElement = document.createElement("textarea");
  newElement.classList.add("form-control");
  newElement.classList.add("workExperienceField");
  newElement.classList.add("mt-2");
  newElement.setAttribute("rows", 3);
  newElement.setAttribute("placeholder", "Type here..");

  let workExperienceObjective = document.getElementById(
    "workExperienceElement"
  );
  let workExperienceButton = document.querySelector("#workExperienceButton");
  workExperienceObjective.insertBefore(newElement, workExperienceButton);
}

function addNewQualification() {
  let newElement = document.createElement("textarea");
  newElement.classList.add("form-control");
  newElement.classList.add("qualificationField");
  newElement.classList.add("mt-2");
  newElement.setAttribute("rows", 3);
  newElement.setAttribute("placeholder", "Type here..");

  let workExperienceObjective = document.getElementById("qualificationElement");
  let workExperienceButton = document.querySelector("#qualificationButton");
  workExperienceObjective.insertBefore(newElement, workExperienceButton);
}

function generateCv() {
  let nameField = document.getElementById("name").value;
  let nameTemplateOne = document.getElementById("templateName");
  nameTemplateOne.textContent = nameField;

  document.getElementById("templateTwoName").innerHTML = nameField;
  document.getElementById("templatePhone").innerHTML =
    document.getElementById("phone").value;
  document.getElementById("templateAddress").innerHTML =
    document.getElementById("address").value;
  document.getElementById("templateFacebook").innerHTML =
    document.getElementById("facebook").value;
  document.getElementById("templateInstagram").textContent =
    document.getElementById("instagram").value;
  document.getElementById("templateLinkedin").innerHTML =
    document.getElementById("linkedin").value;

  document.getElementById("templateObjective").innerHTML =
    document.getElementById("objective").value;

  let workExperience = document.getElementsByClassName("workExperienceField");
  let str = "";

  for (let e of workExperience) {
    str += `<li>${e.value}</li>`;
  }

  document.getElementById("templateWorkExperience").textContent = str;

  let qualification = document.getElementsByClassName("qualificationField");
  let str1 = "";

  for (let e of qualification) {
    str1 += `<li>${e.value}</li>`;
  }

  document.getElementById("templateQualification").textContent = str1;

  let file = document.getElementById("profile").files[0];
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onloadend = function () {
    document.getElementById("image").src = reader.result;
  };

  document.getElementById("cv").style.display = "none";
  document.getElementById("template").style.display = "block";
}

function printCv() {
  window.print();
}
