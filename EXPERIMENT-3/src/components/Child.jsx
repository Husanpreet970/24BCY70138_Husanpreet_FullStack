import { useMemo } from "react";
function Child({ variable, arr }) {
  const calculatedValue = useMemo(() => {
    console.log(
      "useMemo executed"
    );
    return arr + 1;
  }, [arr]);
  return (
    <div className="child">
      <h2>
        Child Component
      </h2>
      <p>
        Value received from parent:
        {" "}
        {variable}
      </p>
      <p>
        Calculated value:
        {" "}
        {calculatedValue}
      </p>
    </div>
  );
}
export default Child;
