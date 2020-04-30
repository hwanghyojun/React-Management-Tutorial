import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer.js'


const customer =[
  {
  'id':'1',
  'img':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'gender':'남자',
  'job':'디자이너'
},
{
  'id':'2',
  'img':'https://placeimg.com/64/64/2',
  'name':'이순신',
  'gender':'남자',
  'job':'격투가'
},
{
  'id':'3',
  'img':'https://placeimg.com/64/64/3',
  'name':'춘향이',
  'gender':'여자',
  'job':'간호사'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return(
              <Customer 
              key={c.id}
              id={c.id}
              img={c.img}
              name={c.name}
              gender={c.gender}
              job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
