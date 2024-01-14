import React from 'react'

function Card(props) {
  
  return (
      <>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        
                <div className="pt-6 md:p-8 text-center space-y-4">
                    <div className="relative h-[400px] w-[300px] rounded-md">
                    <img
                        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                        alt="AirMax Pro"
                        className="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-left">
                        <h1 className="text-lg font-semibold text-white">{props.channel}</h1>
                        <p className="mt-2 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                        debitis?
                        </p>
                        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        {props.btnText || 'Click Here'} →
                        </button>
                    </div>
                    </div>
                </div>
            </figure>
      </>
  )
}
export default Card
