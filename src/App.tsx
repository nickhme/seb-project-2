import React from "react"

function App(){
  React.useEffect(() => {
    fetch(`/api/plants?token=${import.meta.env.VITE_API_KEY}`)
      .then(resp => resp.json())
      .then(data => console.log(data))
  })

  return <section className="section">
    <div className="container">
      <h1 className="title">Hello Plants</h1>
      <img src="https://t4.ftcdn.net/jpg/01/79/88/65/360_F_179886510_6xf0RHhDnLN5ovd2qmGF4WaZMJjqrt6o.jpg" alt="plant" /> 
    </div>    
  </section>
}

export default App