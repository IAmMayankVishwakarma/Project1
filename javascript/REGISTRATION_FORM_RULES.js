    //   customElementsmodelstrat  
   // JavaScript to handle modal and data insertion
   let modal = document.getElementById("myModal");
   let dataTable = document.getElementById("dataTable");

   // Show the modal when Add Data button is clicked
   function showModal() {
       modal.style.display = "block";
   }

   // Close the modal when the X button is clicked
   function closeModal() {
       modal.style.display = "none";
   }

   // Insert data into the table and close the modal when the form is submitted
   function insertData() {
       let name = document.getElementById("name").value;
       let email = document.getElementById("email").value;
       let age = document.getElementById("age").value;

       let newRow = dataTable.insertRow(-1);
       let nameCell = newRow.insertCell(0);
       let emailCell = newRow.insertCell(1);
       let ageCell = newRow.insertCell(2);

       nameCell.innerHTML = name;
       emailCell.innerHTML = email;
       ageCell.innerHTML = age;
       closeModal();       
   }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // for table adding rows
        // function myFunctionTwo(){
        //     let nameOne = document.getElementById("inputName"); 
        //     let selectOne = document.getElementById("selectOne"); 
        //     let selectTwo = document.getElementById("selectTwo"); 
        //     let EnterTwo = document.getElementById("inputEnter"); 
        //     let action = document.getElementById("inputAction"); 
        //     let status = document.getElementById("inputStatus"); 
        //     let table = document.getElementById("myTable");
        //     let row = table.insertRow(-1);
        //     let cell1 = row.insertCell(0);
        //     let cell2 = row.insertCell(1);
        //     let cell3 = row.insertCell(2);
        //     let cell4 = row.insertCell(3);
        //     let cell5 = row.insertCell(4);
        //     let cell6 = row.insertCell(5);
        //     cell1.innerHTML = nameOne.value;
        //     cell2.innerHTML = selectOne.value;
        //     cell3.innerHTML = selectTwo.value;
        //     cell4.innerHTML = EnterTwo.value;
        //     cell5.innerHTML = action.value;
        //     cell6.innerHTML = status.value;
        // }
        
        // function myFunction(){
        //    let nameOne=document.getElementById("inputName"); 
        //    let selectOne=document.getElementById("selectOne"); 
        //    let selectTwo=document.getElementById("selectTwo"); 
        //    let Enter =document.getElementById("inputEnter"); 
        //    let action =document.getElementById("inputAction"); 
        //    let status =document.getElementById("inputStatus"); 
        //     let table = document.getElementById("myTable");
        //     let row = table.insertRow(0);
        //     let cell1 = row.insertCell(0);
        //     let cell2 = row.insertCell(1);
        //     let cell3 = row.insertCell(2);
        //     let cell4 = row.insertCell(3);
        //     let cell5 = row.insertCell(4);
        //     let cell6 = row.insertCell(5);
        //     cell1.innerHTML = nameOne.value;
        //     cell2.innerHTML = selectOne.value;
        //     cell3.innerHTML = selectTwo.value;
        //     cell4.innerHTML = Enter.value;
        //     cell5.innerHTML = action.value;
        //     cell6.innerHTML = status.value;
        //   }
                 
          
          //   BYDEFALT
  var expanded = false;

    function showCheckboxes2() {
        var checkboxes = document.getElementById("checkboxes2");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }



    let expanded = false;

    function showCheckboxes3() {
        let checkboxes = document.getElementById("checkboxes3");
        if (!expan) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }
