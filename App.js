
import {useState} from 'react';

const NetPay = () => {
    const [income, setIncome] = useState(0);
    const [tax, setTax] = useState(0);
    const [result, setResult] = useState(0);

    const handleIncomeChange = (e) => {
        const val = e.target.value;
        setIncome(val);
    }

    const handleTaxChange = (e) => {
        const val = e.target.value;
        setTax(val);
    }

    const getIncomeTax = () => {
        setResult(income-tax);
    }
  

    return(
        <>
            <h1>Net Pay</h1>
            <label htmlFor="income">Income</label>
            <br/>   
            <input type="text" aria-label="income" id="income" name="income" onChange={handleIncomeChange}
                   data-testid="income" />
            <br/>  
            <label htmlFor="income">Tax</label>
            <br/>   
            <input type="text" aria-label="tax" id="tax" name="tax" onChange={handleTaxChange}
                   data-testid="tax" />
            <br/>  
            
            <button onClick={getIncomeTax} data-testid="btn-get-income-tax">Get Net Pay</button> 
            
            <br/>
            <h2 data-testid="netpay-result">Result: {result}</h2>
        </>
    );

};
export default NetPay;