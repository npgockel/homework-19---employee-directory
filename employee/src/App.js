import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor (){
    super()
    this.state = {
      employees:[
        {name:"Ralphe",email:"jkhasj@google.com"},
        {name:"Randy",email:"jkhasj@google.com"},
        {name:"Stan",email:"djkhasj@google.com"}
      ],
      filteredEmployees: [],
      showFiltered: false
    }
  }

  handleTyping = (event) => {
    console.log("We are tyuping", event.target.value.length)

  var filtered = []

    for (var i=0; i<this.state.employees.length; i++){
      console.log(this.state.employees[i].name.substring(0,event.target.value.length))
      if (this.state.employees[i].name.substring(0,event.target.value.length).toLocaleLowerCase() === event.target.value.toLocaleLowerCase()){
       // console.log("We found a match!",this.state.employees[i])
        filtered.push(this.state.employees[i])
      }
    }
    console.log(filtered)
    this.setState({
      filteredEmployees:filtered,
      showFiltered: event.target.value.length === 0 ? false : true
    })

  }

  handleSort = () => {
      console.log('WE GOT CLICKED!!')
  }

  render() {

  console.log('this is our state', this.state)

  var empsToShow = []

  if(this.state.showFiltered === true) {
    empsToShow = this.state.filteredEmployees
  } else {
    console.log('WE HIT THE ELSE SHOW REG EMPLOYESSS!!!')
    empsToShow = this.state.employees
  }
   

  return (
    <div className="App">
    <input onChange={this.handleTyping}></input>
    <table>
    <thead>
      <td onClick={this.handleSort}>Name</td>
      <td>Email</td>
    </thead>
    <tbody>
    {empsToShow.map((singleEmp) => {
      return (
      <tr>
        <td>{singleEmp.name}</td>
        <td>{singleEmp.email}</td>
      </tr>
      )
    })}
    </tbody>
    </table>
    </div>
  );
}
}

export default App;
