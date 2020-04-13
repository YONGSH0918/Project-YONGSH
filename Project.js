function formValidation(){

    let name = document.order.name;
    let address = document.order.address;
     let quantity = document.order.quantity;



        var check = /^[A-Za-z+\s]+$/;
        if(name.value.match(check)){
     
        }else{
            alert('Name must have Alphabet character only');
            name.focus();
            return false;
        }

        var numbers = /^[0-9]+$/;
			if(quantity.value.match(numbers)) {
				// return true;

			} else {

			alert('Invalid input! Numbers must in numeric characters only');
			quantity.focus();
				return false;
			}

  

        var check = /^[\s\S]+$/;
        if(address.value.match(check)){
  
        }else{
            alert('Address must be have alphanumeric characters only');
            address.focus();
            return false;
        }


	alert("Your purchase was successful! Thank you.")
	return true;

}