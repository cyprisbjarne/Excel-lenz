import React, {useState} from "react";
import "../styles/finanz.css";

//noch nichts wie sidebar und so eingefügt,
//dient bis jetzt einfach nur als vorlage
//Layout, UI, noch nichts konkretes, bis jetzt nur die basic Umsatzechnung


export default function Finanz() {


    //UMSATZ
    //Variablen sind bis jetzt nur als Beispiel mit vorgegebenen Wert
    const [verkauf, setVerkauf] = useState(150);
    const [preis, setPreis] = useState(12);
    const umsatz = verkauf * preis;


    return (
        <div className="vbox">
            <h1 className="title">Finanz</h1>



            <section>
                <h1>Umsatz</h1>
                <h2 className="smalltitle">pro Monat: </h2>
                <div className="hbox">
                    <div className="eingabe box">
                        Verkaufseinheiten: {verkauf}
                    </div>
                    <div className="eingabe box">
                        Preis: {preis}€
                    </div>
                </div>
                <div className="umsatz box">
                    Umsatz: {umsatz}€
                </div>
                <div className="platzhalter">füge hier Umsatzdiagramm ein</div>
            </section>


        </div>

    );
}
