/*create app.js and make the following changes to the output element:

- step 1: Select the page element as a JavaScript object.
- step 2: Update the textContent property of the selected page element e.g write your name
- step 3: Using the classList.add object method, add a class of red to the element.
- step 4: Update the id property of the element to tester.
- step 5: Through the style object, add a backgroundColor property of red to the page element.
- step 6: Get the document URL via document.URL and 
- step 7: update the text of the output element to contain the value of the document URL. 
- step 8: You can log it in the console first to ensure you have the correct value.*/


let output = document.querySelector('.output');
output.textContent = "Group 1";
output.classList.add("red");
output.id = "tester";
output.style.backgroundColor = "red";
console.log(document.URL);
output.textContent = document.URL;


