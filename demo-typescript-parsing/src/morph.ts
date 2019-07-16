import { Project } from "ts-morph";

const project = new Project();
const sourceFile = project.addExistingSourceFile("src/magic.ts");
project.resolveSourceFileDependencies();
const diagnostics = project.getPreEmitDiagnostics();

if (diagnostics.length > 0) {
  console.error(diagnostics);
} else {
  console.log("Valid code!");
}

// console.log(sourceFile.getVariableDeclarationOrThrow("magic"));
