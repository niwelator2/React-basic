import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Simple Form</h1>
      <SimpleForm />
    </div>
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
  
}

export default App
