export function ManipulandoEventos() {
    function handleClick() {
        alert("clicou");
    }
    
    function handleMouseOver() {
        console.log("Você entrou no botão");
    }
    
    function handleMouseLeave() {
        console.log("Você saiu do botão");
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Formulário enviado")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"></input>
            <button 
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >Clique Aqui!</button>
        </form>
    );
}