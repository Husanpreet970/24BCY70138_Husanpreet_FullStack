import { useParams, useSearchParams } from "react-router-dom";
function About() {
  const { key } = useParams();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  return (
    <div>
      <h1>About Page</h1>
      <h2>Key: {key}</h2>
      <h2>Search: {search}</h2>
    </div>
  );
}
export default About;
