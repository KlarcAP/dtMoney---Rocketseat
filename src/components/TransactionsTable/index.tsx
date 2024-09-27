import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionTable(){
    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Compra de carro</td>
                        <td>R$ 5000</td>
                        <td>Carro</td>
                        <td>01/01/2022</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Desenvolvimetno de website</td>
                        <td className="deposit">R$ 12000</td>
                        <td>Desenvolvimento</td>
                        <td>01/01/2022</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Desenvolvimetno de website</td>
                        <td className="withdraw">- R$ 12000</td>
                        <td>Desenvolvimento</td>
                        <td>01/01/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}