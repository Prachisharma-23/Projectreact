
import React from 'react'
import ReactDom from 'react-dom/client'

/*function MyApp(){
    return(
        <div>
            <h1>Custom App ! :|</h1>
        </div>
    )
}*/

// const reactElement={
//     type:'a',
//     props:{
//         href:'https:google.com',
//         target:'_blank'
//     },
//     children:'click here to visit google'
// }

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit here</a>
// )

const anotherElement= " googli googli"

const reactElement= React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherElement
)
ReactDom.createRoot(document.getElementById('root')).render(
    reactElement
)

export default main