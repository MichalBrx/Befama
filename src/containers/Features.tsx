import React from 'react'

const Features = () => {
  return (
    <div id='container' className="flex justify-center">

      <div id='content1' className="w-full h-auto flex flex-wrap justify-start m-3">
          <div className="flex justify-center flex-wrap my-3">
            <img src="./wilk.jpg" className="" />
          </div>
          <div className="">
              <h1 className=" text-xl font-semibold pb-3">Wilk zgrzeblący typu AB6N</h1>
              <p className="">
                Maszyna przeznaczona do rozwłókniania najcięższych surowców włókienniczych, takich jak: włókna szklane, węglowe i bazaltowe.
                Doskonale sprawdza się również w przerobie innych włókien: naturalnych, chemicznych i syntetycznych.
              </p>
          </div>
          
      </div>

      <div id='content2'>

      </div>
    </div>
  )
}

export default Features