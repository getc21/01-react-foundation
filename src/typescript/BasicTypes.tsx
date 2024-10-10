export const BasicTypes = () => {
  const name = "Fernando";
  const age = 37;
  const isActive = true;

  const powers: string[] = ["React", "Reactnative", "Angular", "Vue", "Qwik"];

  return (
    <>
      <h3>Tipos basicos</h3>
      {name} {age} {isActive ? "true" : "false"}
      <br />
      {powers.join(", ")}
    </>
  )
};
