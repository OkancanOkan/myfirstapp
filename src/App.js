import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const[name,setTxtName] = useState();
  const[password,setTxtPassword] = useState();
  const [result,setResult] = useState();
  const gonder = async() =>
  {
    if (name == "onur" && password == 123 )
    {
      setResult ('Login Basarılı');
    }else
    {
      setResult ('Kullanıcı Adı veya Şifre Hatalı!!!');
    }

  }

  

  return (
    
    
    <form name="form1" >
      <center>
        <h1>Giriş Ekranı</h1>
      <table>
        <tr>
          <td>
        <label htmlFor>Kullanıcı Adı</label>
        </td>
        <td>
        <input autocomplete="off" type="text" name="txtName" id="txtName" onChange={e=>setTxtName(e.target.value)} />
        </td>
        </tr>
        <tr>
        <td>
        <label htmlFor>Şifre</label>
        </td>
        <td>
        <input  autocomplete="off" type="password" name="txtPassword" id="txtPassword" onChange={e=>setTxtPassword(e.target.value)} />
        </td>
        </tr>
        
        </table>
          <br/>
          <input type="button" defaultValue="Giriş" name="btn1" onClick={()=>gonder()} />
          <br/><br/>
          <b>{result}</b>
          
          </center>
          </form>
           
        
        
       
        
      
     
  );
}

export default App;
