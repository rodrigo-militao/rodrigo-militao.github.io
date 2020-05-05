import React from 'react';

class Resume extends React.Component {
  render() {
    const { nome, email, cpf, adress} = this.props;
  	return (
     <div>
       {nome}
       {email}
     </div> 
    );
  }
}

export default Resume;
