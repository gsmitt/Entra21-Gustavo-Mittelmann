import React from "react";

export class ComponentesControlados extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            nome: "",
            email: "",
            cpf: "",
            sexo: "",
            cidade: ""
        }
    }


    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [ name ]: value
        });
    }


    render(){
        return (
            <form>
                <label>
                    Nome: 
                    <input 
                        type="text" 
                        name="nome"
                        onChange={this.handleChange} 
                        value={this.state.nome}
                    />
                </label>
                <label>
                    Email: 
                    <input 
                        type="email" 
                        name="email"
                        onChange={this.handleChange} 
                        value={this.state.email}
                    />
                </label>
                <label>
                    CPF: 
                    <input 
                        type="text" 
                        name="cpf"
                        onChange={this.handleChange} 
                        value={this.state.cpf}
                    />
                </label>
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="sexo" 
                        onChange={this.handleChange} 
                        value="masculino"
                    /> Masculino
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="sexo" 
                        onChange={this.handleChange} 
                        value="feminino"
                    /> Feminino
                </label>
                <select name="cidade" onChange={this.handleChange}>
                    <option value="Blumeanau">Blumeanau</option>
                    <option value="Indaial">Indaial</option>
                    <option value="Timbó">Timbó</option>
                </select>
                <br/>
                <button>Enviar</button>
            </form>
        );
    }
}