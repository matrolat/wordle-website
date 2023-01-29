import React, { Component } from 'react'
import "./App.css"
export default class line extends Component {
    constructor(props) {
        super(props)
        this.state = {
          captureSpace: true,
          captureEnter: true,
          keyPressMessage: '',
          clickMessage: '',
          inp1:'',
          inp2:'',
          inp3:'',
          inp4:'',
          inp5:'',
          col:'gray'
        }
      }



    handleKeyDown(e) {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");    
        let fieldIntIndex = parseInt(fieldIndex, 10);    
        this.setState({ clickMessage: '' })
        this.setState({ keyPressMessage: 'key: "' + e.key + '" - keyCode: ' + e.keyCode })
        if (this.state.captureSpace && (e.key === " " || e.keyCode === 8) && value.length===0) {
            const nextfield = document.querySelector(
                `input[name=field-${fieldIntIndex - 1}]`
              );  
              if (nextfield !== null) {
                nextfield.focus();
              }
        }
        if(e.keyCode !== 8 && value.length===1)
        {
            
            const nextfield = document.querySelector(
                `input[name=field-${fieldIntIndex + 1}]`
              );     
              if (nextfield !== null) {
                nextfield.focus();
              }
        }
   

        if (this.state.captureSpace && (e.key === " " || e.keyCode === 13) && fieldIntIndex===(this.props.l+4)) {
            // console.log("enter");
            this.props.handleBlock(this.props.index,this.state.inp1,this.state.inp2,this.state.inp3,this.state.inp4,this.state.inp5);
        }

      }


    handleChange = (e) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");    
        let fieldIntIndex = parseInt(fieldIndex, 10);    


        if(fieldIntIndex===1 || fieldIntIndex===6 || fieldIntIndex===11 || fieldIntIndex===16 || fieldIntIndex===21 ){
            this.setState({inp1:value})         
        }
        if(fieldIntIndex===2 || fieldIntIndex===7 || fieldIntIndex===12 || fieldIntIndex===17 || fieldIntIndex===22 ){
            this.setState({inp2:value})         
        }
        if(fieldIntIndex===3 || fieldIntIndex===8 || fieldIntIndex===13 || fieldIntIndex===18 || fieldIntIndex===23 ){
            this.setState({inp3:value})         
        }
        if(fieldIntIndex===4 || fieldIntIndex===9 || fieldIntIndex===14 || fieldIntIndex===19 || fieldIntIndex===24 ){
            this.setState({inp4:value})         
        }
        if(fieldIntIndex===5 || fieldIntIndex===10 || fieldIntIndex===15 || fieldIntIndex===20 || fieldIntIndex===25 ){
            this.setState({inp5:value})         
        }
        



        if (value.length >= maxLength) {    
            if (fieldIntIndex < (this.props.l+4)) {    
                const nextfield = document.querySelector(
                    `input[name=field-${fieldIntIndex + 1}]`
                    );     
                    // console.log(fieldIntIndex + 1)
            if (nextfield !== null) {
              nextfield.focus();
            }
          }
        }
        else{
            if (fieldIntIndex > (this.props.l-1) ) {    
                          
                // Get the next input field using it's name
                const nextfield = document.querySelector(
                  `input[name=field-${fieldIntIndex - 1}]`
                );     
                // If found, focus the next field
                if (nextfield !== null) {
                  nextfield.focus();
                }
              }
        }
      };

      

  render() {
    // const style = this.props.index===1? {backgroundColor:this.props.col1} :{}
    const style1 = { backgroundColor:this.props.col1}
    const style2 = { backgroundColor:this.props.col2}
    const style3 = { backgroundColor:this.props.col3}
    const style4 = { backgroundColor:this.props.col4}
    const style5 = { backgroundColor:this.props.col5}

    return (
        <div className="row">
        <input style={style1} type="text" id="fname" name={"field-"+this.props.l} maxLength="1" onChange={this.handleChange} onKeyDown={(e) => this.handleKeyDown(e)} disabled={this.props.block}/>
        <input style={style2} type="text" id="fname" name={"field-"+ (this.props.l+1)} maxLength="1" onChange={this.handleChange} onKeyDown={(e) => this.handleKeyDown(e)} disabled={this.props.block}/>
        <input style={style3} type="text" id="fname" name={"field-"+(this.props.l+2)} maxLength="1" onChange={this.handleChange} onKeyDown={(e) => this.handleKeyDown(e)} disabled={this.props.block}/>
        <input style={style4} type="text" id="fname" name={"field-"+(this.props.l+3)} maxLength="1" onChange={this.handleChange} onKeyDown={(e) => this.handleKeyDown(e)} disabled={this.props.block}/>
        <input style={style5} type="text" id="fname" name={"field-"+(this.props.l+4)} maxLength="1" onChange={this.handleChange} onKeyDown={(e) => this.handleKeyDown(e)} disabled={this.props.block}/>
        </div>
    )
  }
}
