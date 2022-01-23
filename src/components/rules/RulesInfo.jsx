import '../Info.css';
import './RulesInfo.css';

const RulesInfo = () => {
  return (
    <div className='info--wrapper info-rules'>
      <h2>Reglas del juego</h2>
      <ul>
        <li>
            Dispondremos de 6 casillas que representan un camino en la zona de carga de la Razor Crest que lleva hasta el armario donde se encuentra segura la mercancía. De este modo, tendremos 7 casillas: 6 del camino y una que representa el armario.
            <div className="rules-path">
              <div className="rules-path--tiles"></div>
              <div className="rules-path--tiles"></div>
              <div className="rules-path--tiles"></div>
              <div className="rules-path--tiles"></div>
              <div className="rules-path--tiles"></div>
              <div className="rules-path--tiles"></div>
              <div className="rules-path--tiles">✕</div>
            </div>
          </li>
          <li>
            Durante el viaje has hecho muy bien tu trabajo, pero ahora deber vaciar el armario. Para ello, deberás descargar la mercancía poco a poco. Este es el momento más delicado ya que Grogu puede aprovechar y llegar hasta el armario. Si esto ocurre, se comerá lo que encuentre y Mando perderá la oportunidad de saber dónde está Ahsoka, ergo te has quedado sin recompensa.
          </li>
          <li>
           Además de estas 7 piezas, tendrás 3 recipientes donde se guarda cada tipo de mercancía. De esta manera quedaría:
              <ul className='info-rules--sublist'>
                <li>
                  - Recipiente de las galletas: Tendrá 3 cajas de galletas azules dentro.
                </li>
                <li>
                  - Recipiente de los huevos de rana: Tendrá dentro 3 huevos de rana (sin fertilizar).
                </li>
                <li>
                  - Recipiente de las ranas: Tendrá dentro 3 ranas.
                </li>
              </ul>
          </li>
      </ul>
      <ul>
        <li>
            Además de estas piezas, tendremos un dado de 5 caras donde cada cara representa una de las siguientes acciones:
          </li>
      </ul>
      <table className='info-rules--table'>
        <thead>
          <tr>
            <th>N.º en el dado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Descargas una caja de galletas azules 🍪</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Descargas un huevo de rana 🥚</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Descargas una rana 🐸</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Grogu avanza una casilla ➡️</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Grogu retrocede una casilla ⬅️</td>
          </tr>
          </tbody>
      </table>
    </div>
  )
}

export default RulesInfo;