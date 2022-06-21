const first =   prompt('enter first number');
const second =   prompt('enter second number');
const operator =  prompt('enter either -,+,*,/')

if(operator.includes('+')){
    alert(parseInt(first) + parseInt(second)) 
    }
else if(operator.includes('-')){
    alert(parseInt(first) - parseInt(second))
    }
else if(operator.includes('/')){
    alert(parseInt(first) / parseInt(second))
        
}else if(operator.includes('*')){
    alert(parseInt(first) * parseInt(second))
    }
        
    

