
function Contact(props) {

    return (<div className="formContact">
        <h3>Cuentanos, ¿en que te podemos ayudar?</h3>
        <form>
            <div className="correo">
                <p>Correo:</p>
                <input type="text" placeholder="antonio@correo.com" value={props.value} />
            </div>
            <div className="description">
                <p>Descripción:</p>
                <input type="text" />
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
    )
}

export default Contact