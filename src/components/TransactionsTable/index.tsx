import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento site </td>
            <td>R$ 12.000 </td>
            <td>Venda </td>
            <td>1/01/2023 </td>
          </tr>

          <tr>
            <td>Desenvolvimento site </td>
            <td>R$ 12.000 </td>
            <td>Venda </td>
            <td>1/01/2023 </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
