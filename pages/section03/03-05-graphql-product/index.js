import RestPage from "../03-01-rest-api";
import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "판매자는 ??",
        createProductInput: {
          name: "키보드",
          detail: "정말 좋으 키보드",
          price: 300000,
        },
      },
    });
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickSubmit}>Graphql API 요청하기</button>
    </div>
  );
}
