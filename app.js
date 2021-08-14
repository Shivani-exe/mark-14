const initialPrice=document.querySelector('#initial-price');
const stocks=document.querySelector('#stocks');
const currentPrice=document.querySelector('#current-price');
const submitBtn=document.querySelector('#submit-btn');
const outputTxt=document.querySelector('#output-txt');

function calculateProfitAndLoss(initial,quantity,current)
{
    
    if(initial>current)
    {
        const loss=(initial - current)*quantity;
        const lossPercentage=(loss/initial)*100;
       
        outputTxt.innerText="Hey the loss is "+ loss +" and the percentage is "+ lossPercentage +"%.😭";
        outputTxt.style.color='red';
       
        
    }
    else if(current>initial)
    {
        const profit=(current-initial)*quantity;
        const profitPercentage=(profit/initial)*100;
        outputTxt.innerText="Yay the profit is "+ profit +" and the percentage is "+ profitPercentage +"%.😍";
        outputTxt.style.color='green';
        outputTxt.toFixed(2);
    }
    else
    {
        outputTxt.innerText="No Pain No Gain ,No Gain No Pain!🤔";

    }
}


function submitHandler()
{
    
    const ini=Number(initialPrice.value);
    const quant=Number(stocks.value);
    const curr=Number(currentPrice.value);
  
    
    calculateProfitAndLoss(ini,quant,curr);
    
    
}
submitBtn.addEventListener('click',submitHandler);