window.addEventListener('load', () => {
   const form = document.getElementById("my-form");

   const testName = document.getElementById("test-name");
   const testDate = document.getElementById("test-date");
   const rocketType= document.getElementById("test-select");
   const numBoosters = document.getElementById("test-num");
   const checkBox = document.getElementById("test-check");

   const nameError = document.getElementById("name-error");
   const dateError = document.getElementById("date-error");
   const selectError = document.getElementById("select-error");
   const boosterError = document.getElementById("booster-error");
   const checkboxError = document.getElementById("checkbox-error");


   form.addEventListener('submit', (event) => {

       const isValidName = testName.value;
       const isValidData = testDate.value;
       const isValidRocket = rocketType.value;
       const isValidBooster = numBoosters.value;
       const isChecked = checkBox.value

       console.log('ischeckd>>>>>>>', isChecked)


        if(!isValidName) {
            event.preventDefault();
            nameError.innerHTML = "Name is Required."
            nameError.style.color = 'red';
        }

        if(!isValidData) {
            event.preventDefault();
            dateError.innerHTML = 'Date is Required.'
            dateError.style.color = 'red';
        }

        if(!isValidRocket) {
            event.preventDefault();
            selectError.innerHTML = "Rocket type is Required.";
            selectError.style.color = 'red';
        }

        if(!isValidBooster) {
            event.preventDefault();
            boosterError.innerHTML = "Number of boosters are Required.";
            boosterError.style.color = 'red';
        }

        if(!isChecked) {
            event.preventDefault();
            checkboxError.innerHTML = "Checkbox must be checked.";
            checkboxError.style.color = 'red';
        }

   })
});