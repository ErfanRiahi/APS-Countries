import { Container } from "./Container";
import { Filter } from "./Filter";

export function Main({ data }) {
  return (
    <>
      {data ? (
        <>
          <Filter data={data} />
          <Container />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
