/*
Filename: /Content/app.js
Student Name: Prashant Sharma
Student ID: 301175737
Date: Oct 2, 2021
*/

//Confirming delete and deleting an entry
(()=>{function Start(){
    console.log("App started...")
    let deleteButtons= document.querySelectorAll('.btn-danger');
    for(button of deleteButtons)
    {
        button.addEventListener("click", (event)=>{
            if(!confirm("Are you sure?"))
            {
                event.preventDefault();
                //window.location.assign('/book_list');
            }
        });
    }
}  
window.addEventListener("load", Start, false);
})();

