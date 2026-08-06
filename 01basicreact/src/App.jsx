import Test from "./test"

function App() {
    const username="hello"
  return (
    <>
  <Test/>
  <h1>Can write this while using fragment 'tag' {username}</h1>
  <p>Can return only one element but use fragment and can add many more element </p>
  </>
  )
}

export default App
