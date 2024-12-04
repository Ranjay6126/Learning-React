import './App.css'

function App() {

  function handleButtonClick() {
    alert("I am clicked");
  }

  function onMouseOver() {
    alert("Mouse is over Me");
  }

  return (
    <div>
      <p onMouseOver={onMouseOver}> I am a Paragraph whenever you will Mouse Over me I will show an alert </p>
      
      <button onClick={handleButtonClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
