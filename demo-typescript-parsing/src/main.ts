import * as ts from "typescript";

let sourceCode = `
interface User {
    name: string;
}
`;

// Parse the code.
const tsSourceFile = ts.createSourceFile(
  __filename,
  sourceCode,
  ts.ScriptTarget.Latest
);

// Print the parsed Abstract Syntax Tree (AST).
for (const statement of tsSourceFile.statements) {
  console.log(statement);
}
