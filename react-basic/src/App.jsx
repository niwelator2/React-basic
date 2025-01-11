import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
    <div className="container my-5">
      <h1 className="text-center mb-4">Simple Form</h1>
      <SimpleForm />
    </div>
      
    <div className="grid">
      <Grid />
    </div>
    </>
  );

  function SimpleForm() {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }

  function Grid(){
    return (
      <>
      <div class="container text-center">
      <div class="row">
        <div class="col">
          Ala nie ma kota 
        </div>
        <div class="col">
          Ala nie ma kota 
        </div>
        <div class="col">
          Ala nie ma kota 
        </div>
        <div class="col">
          Ala nie ma kota 
        </div>
        <div class="col">
          Ala nie ma kota 
        </div>
        <div class="col">
          Ala nie ma kota 
        </div>
        <div class="col">
          Ala nie ma kota 
        </div>
        <div class="col">
          Ala nie ma kota 
        </div>
        <div class="col">
          Ala nie ma kota 
        </div>
        <div class="col">
          Ala nie ma kota 
        </div>
        <div class="col">
          Ala nie ma kota 
        </div>
        <div class="col">
          Ala nie ma kota 
        </div>
      </div>
    </div>
      </>
    )
  }
  
}

export default App
