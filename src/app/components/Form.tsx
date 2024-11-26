import React, { ReactNode } from "react";

const Form = ({
  handleSubmit,
  formElements,
}: {
  handleSubmit: (e: React.FormEvent) => void;
  formElements: React.ReactNode;
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {formElements.map((element: ReactNode, ndx: number) => (
        <div key={`formitem-${ndx}`}>{element}</div>
      ))}
    </form>
  );
};

export default Form;
