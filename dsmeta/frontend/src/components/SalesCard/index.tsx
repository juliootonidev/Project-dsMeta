import NotificationButton from '../NotificationButton'
import './styless.css'

function SalesCard() {
    return (
        <div className="dsmeta-card" >
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div className="dsmeta-form-control-conteiner">
                <input className="dsmeta-form-control" type="text" />
            </div>
            <div className="dsmeta-form-control-conteiner">
                <input className="dsmeta-form-control" type="text" />
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="dsmeta-show992">ID</th>
                            <th className="dsmeta-show576">Data</th>
                            <th>Vendedor</th>
                            <th className="dsmeta-show992">Visitas</th>
                            <th className="dsmeta-show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="dsmeta-show992">#341</td>
                            <td className="dsmeta-show576">12/12/2022</td>
                            <td>Amanda</td>
                            <td className="dsmeta-show992">15</td>
                            <td className="dsmeta-show992">11</td>
                            <td>R$500.00</td>
                            <td>
                                <div className="dsmeta-red-btn-conteiner">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="dsmeta-show992">#342</td>
                            <td className="dsmeta-show576">12/12/2022</td>
                            <td>Anakin</td>
                            <td className="dsmeta-show992">10</td>
                            <td className="dsmeta-show992">25</td>
                            <td>R$55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-conteiner">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default SalesCard
