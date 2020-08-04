import React, { Component } from "react";
import Card from "./components/Card.jsx";
import "./sass/index.scss";
import Airtable from "airtable";


const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
}).base(process.env.REACT_APP_API_AIRTABLE_BASE_ID);


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      media: "hello",
      records: [],
    };
  }

  
  
  componentDidMount() {
    localStorage.setItem("session", "blue");
console.log(localStorage.getItem("session"));
    
        base("Media")
      .select({ view: "List", fields: ["service", "url", "default-hex", "id"]})
      .eachPage((records, fetchNextPage) => {
        this.setState({ records: records });
        fetchNextPage();
      });
    
    
    
   
  }
 
  
  render() {
       
    return (
      <main className="container">
       
        {this.state.records.map((record, index) => (
                    
          <Card
            key={record.fields["id"]}
            id={record.fields["id"]} 
            color={record.fields["default-hex"]}
            url={record.fields["url"]}
            label={record.fields["service"]}          
           /> 
     
          ))}
 
        
      </main>
    
    );
  }
}

export default App;

/*---


 






-------------------------

    {media.map((open, index, label) => (
                    
          <Card           
            id={open.id}
            color={open.color}
            url={open.url}
            label={open.label}           
           /> 
     
          ))}
          
          ---*/