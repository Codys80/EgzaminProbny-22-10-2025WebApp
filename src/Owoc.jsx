

function Owoc({owoc, onCartAdd}) {
    return (
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={owoc.grafika} className="card-img-top" alt={owoc.odmiana} style={{height: "15rem"}} />
            <div className="card-body">
                <h5 className="card-title">{owoc.typ} {owoc.odmiana}</h5>
                <p className="card-text">{owoc.opis}</p>
                <p className="card-text">Cena: {owoc.cena}zł</p>
                <p className="card-text">Dostępne sztuki: {owoc.sztuk}</p>
                <button className="btn btn-primary" onClick={() => onCartAdd(owoc.id)}>do koszyka</button>
            </div>
        </div>
    );
}

export default Owoc;