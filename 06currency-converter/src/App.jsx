import { useState } from 'react' 
import { Inputbox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo' 

function App() {
   
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState('usd');
  const [to,setTo] = useState('inr');
  const [convertedAmount,setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => { 
    setConvertedAmount(amount*currencyInfo[to])
  }
  
  return (
     
       <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' 
       style={{ backgroundImage:`URL('https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}>
          <div className='w-full'>
            <div className='w-full max-w-ms mx-auto boarder border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
              <form onSubmit={(e) => {
                  e.preventDefault();
                  convert();
              }}>
                <div className='w-full '>
                  <Inputbox label='From' amount={amount} currencyOption={options} onCurrencyChange={(currency) => setAmount(amount)} 
                   selectCurrency='{from}' onAmountChange={ (amount) => setAmount(amount)}>

                  </Inputbox>
                </div>
                <div className=' w-full'>
                  <button type='button' className='text-center  bg-blue-600 px-2 py-0.5 left-1/2 rounded-lg text-white'  onClick={swap}>
                    Swap</button>
                </div>
                <div className='w-full mb-5'>
                     <Inputbox label='To' amount={convertedAmount} currencyOption={options} onCurrencyChange={(currency) => setTo(from)} 
                      selectCurrency='{from}' amountDisable> 
                      </Inputbox>
                </div> 
                <button type='submit' className='w-full bg-cyan-600 px-2 py-1 rounded-lg text-white top-5'>Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
              </form>
              
            </div>
          </div>
       </div>
     
  )
}

export default App
