function subData(){
    let input = document.getElementById('data');
    let regex = /^[0-9,]+$/;
    let datasplit;
    let result = [];
    let resultHTML = "";

    if(input.value.length == 0){
        alert('Tidak boleh kosong');
    }else{
        if(input.value.match(regex)){
            datasplit = input.value.split(",");
            datasplit.forEach(val => {
                if((parseInt(val) % 3 === 0) && (parseInt(val) % 5 === 0)){
                    result.push("FizzBuzz");
                }else if(parseInt(val) % 3 === 0){
                    result.push("Fizz");
                }else if(parseInt(val) % 5 === 0){
                    result.push("Buzz");
                }else{
                    result.push(val);
                }
            });

            result.forEach(val => {
                resultHTML += `<li>${val}</li>`;
            });

            document.querySelector('.div-result').innerHTML = resultHTML;
        }else{
            alert('Anda hanya boleh menggunakan ANGKA dan KOMA');
        }
    }
    
}