import React, {useState} from "react";
import "../styles/umsatz.css";

//noch nichts wie sidebar und so eingefügt,
//dient bis jetzt einfach nur also vorlage für den Umsatz
//Layout, UI, noch nichts konkretes, einfach nur die basic Umsatzechnung


export default function Umsatz() {

    //Variablen sind bis jetzt nur als Beispiel mit vorgegebenen Wert

    const [verkauf, setVerkauf] = useState(150);
    const [preis, setPreis] = useState(12);

    const umsatz = verkauf * preis;


    return (
        <div className="vbox">
            <h1 className="title">Umsatz</h1>

            <section>
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
            </section>
            <div className="platzhalter">füge hier diagramm ein</div>
        </div>

    );
}
