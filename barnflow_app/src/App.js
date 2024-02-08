import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className='mt-5 container'>
        <div className='card'>
          <div className='card-header'>
            Horsies
          </div>
          <div>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Breed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Dolf</td>
                  <td>Something</td>
                </tr>
              </tbody>
          </table>
          </div>
        </div>
      </div>
    
  );
}

export default App;
