import { Stack } from "react-bootstrap";
import { featuredArticle } from "../../../assets/images";
import "./Hero.css";
const Hero = () => {
  return (
    <div
      className="hero-container mt-5"
      style={{ backgroundImage: `url(${featuredArticle.default})` }}
    >
      <Stack className="hero-content-container" gap={3}>
        <p className="body-text-title">FEATURED ARTICLE</p>
        <p className="title-text">World’s Most Dangerous Technology Ever Made.</p>
        <Stack direction="horizontal" gap={2}>
          <p className="body1">Ralph Hawkins</p>
          <p className="body1">May 7, 2019 (10 mins read)</p>
        </Stack>
        <p>
          Proident aliquip velit qui commodo officia qui consectetur dolor
          ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex
          laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
          Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat
          velit magna.
        </p>
      </Stack>
    </div>
  );
};

export default Hero;
