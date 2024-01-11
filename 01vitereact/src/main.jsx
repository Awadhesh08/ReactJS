import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

function MyApp() {
  return (
    <h1>
      This is MyApp function
    </h1>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Awadhesh with Friends"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank' }, 
  'Click me to visit google',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(

  // <App />
  // <MyAppApp />
  // ReactElement  // it show error
  // anotherElement
  reactElement

)
