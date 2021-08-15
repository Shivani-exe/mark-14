const initialPrice=document.querySelector('#initial-price');
const stocks=document.querySelector('#stocks');
const currentPrice=document.querySelector('#current-price');
const submitBtn=document.querySelector('#submit-btn');
const outputTxt=document.querySelector('#output-txt');

function calculateProfitAndLoss(initial,quantity,current)
{
    initial=Number(initial);
    quantity=Number(quantity);
    current=Number(current);
    if( !isNaN(initial) && !isNaN(quantity) && !isNaN(current))
    {
    if(initial>current)
    {
        const loss=((initial - current)*quantity).toFixed(2);
        const lossPercentage=((loss/initial)*100).toFixed(2);
       
        outputTxt.innerText="Hey the loss is "+ loss +" and the percentage is "+ lossPercentage +"%.😭";
        outputTxt.style.color='red';
       
        
    }
    else if(current>initial)
    {
        const profit=((current-initial)*quantity).toFixed(2);
        const profitPercentage=((profit/initial)*100).toFixed(2);
        outputTxt.innerText="Yay the profit is "+ profit +" and the percentage is "+ profitPercentage +"%.😍";
        outputTxt.style.color='green';
        outputTxt.toFixed(2);
    }
    else
    {
        outputTxt.innerText="No Pain No Gain ,No Gain No Pain!🤔";

    }
}
else
{
    outputTxt.innerText="Please enter all the Fields";
}

}


function submitHandler()
{
    
    const ini=initialPrice.value;
    const quant=stocks.value;
    const curr=currentPrice.value;
  
    
    calculateProfitAndLoss(ini,quant,curr);
    
    
}
submitBtn.addEventListener('click',submitHandler);