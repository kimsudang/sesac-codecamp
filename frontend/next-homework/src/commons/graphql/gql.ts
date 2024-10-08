/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      writer\n      title\n      contents\n      youtubeUrl\n      likeCount\n      dislikeCount\n      images\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n      createdAt\n    }\n  }\n": types.FetchBoardDocument,
    "\n  mutation deleteBoard($boardId: ID!) {\n    deleteBoard(boardId: $boardId)\n  }\n": types.DeleteBoardDocument,
    "\n  mutation createBoard($writer: String, $password: String, $title: String!, $contents: String!) {\n    createBoard(createBoardInput: { writer: $writer, password: $password, title: $title, contents: $contents }) {\n      _id\n      writer\n      title\n      contents\n      likeCount\n      dislikeCount\n    }\n  }\n": types.CreateBoardDocument,
    "\n  mutation updateBoard($boardId: ID!, $password: String, $updateBoardInput: UpdateBoardInput!) {\n    updateBoard(boardId: $boardId, password: $password, updateBoardInput: $updateBoardInput) {\n      _id\n    }\n  }\n": types.UpdateBoardDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      writer\n      title\n      contents\n      youtubeUrl\n      likeCount\n      dislikeCount\n      images\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      writer\n      title\n      contents\n      youtubeUrl\n      likeCount\n      dislikeCount\n      images\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteBoard($boardId: ID!) {\n    deleteBoard(boardId: $boardId)\n  }\n"): (typeof documents)["\n  mutation deleteBoard($boardId: ID!) {\n    deleteBoard(boardId: $boardId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createBoard($writer: String, $password: String, $title: String!, $contents: String!) {\n    createBoard(createBoardInput: { writer: $writer, password: $password, title: $title, contents: $contents }) {\n      _id\n      writer\n      title\n      contents\n      likeCount\n      dislikeCount\n    }\n  }\n"): (typeof documents)["\n  mutation createBoard($writer: String, $password: String, $title: String!, $contents: String!) {\n    createBoard(createBoardInput: { writer: $writer, password: $password, title: $title, contents: $contents }) {\n      _id\n      writer\n      title\n      contents\n      likeCount\n      dislikeCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateBoard($boardId: ID!, $password: String, $updateBoardInput: UpdateBoardInput!) {\n    updateBoard(boardId: $boardId, password: $password, updateBoardInput: $updateBoardInput) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation updateBoard($boardId: ID!, $password: String, $updateBoardInput: UpdateBoardInput!) {\n    updateBoard(boardId: $boardId, password: $password, updateBoardInput: $updateBoardInput) {\n      _id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;