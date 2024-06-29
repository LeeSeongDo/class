import { graphql } from "msw";

const gql = graphql.link("https://mock.com/graphql");

// api는 여러개니까 배열로
export const apis = [
  gql.mutation("createBoard", (req, res, ctx) => {
    const { writer, title, contents } = req.variables.createBoardInput;

    return res(
      ctx.data({
        createBoard: {
          _id: "qqq",
          writer: writer,
          title: title,
          contents: contents,
          __typename: "Board",
        },
      })
    );
  }),
];
