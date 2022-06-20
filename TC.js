const showTemp = () => {

    const tempVal = document.getElementById('temp_val').value; 
        
    const unitSelected = document.getElementById('choose');
    const unitVal = choose.options[unitSelected.selectedIndex].value;  

    const CeltoFah = (cel) =>{
         let fahrenheit = Math.round((cel/5)*9+32);
         return fahrenheit;   
    }

    const FahtoCel = (fah) =>{
         let celsius = Math.round((fah-32)*5/9);
         return celsius;  
    }

    let result;   

    if(unitVal == 'cel'){
        result = CeltoFah(tempVal);
        document.getElementById('con_val').innerHTML =   `${tempVal}&#176; Celsius&nbsp = &nbsp${result}&#176; Fahrenheit`;
    }
    else
    {
        result = FahtoCel(tempVal);
        document.getElementById('con_val').innerHTML =   `${tempVal}&#176; Fahrenheit&nbsp = &nbsp${result}&#176; Celsius`;
    }
}