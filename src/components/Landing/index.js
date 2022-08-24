import { useQuery } from "@apollo/client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { gql } from "graphql-tag";

const GET_SLIDER_IMAGES = gql`
  query Slider {
    slider {
      id
      name
      url
    }
  }
`;

const Landing = () => {
  const { data, loading, error } = useQuery(GET_SLIDER_IMAGES);

  if (loading) {
    return <i>Loading...</i>;
  }

  if (error) {
    return <i>Error</i>;
  }

  if (!data) {
    return <i>Data not available</i>;
  }

  return (
    <div>
      <Carousel autoPlay infiniteLoop>
        {data.slider.map((sld) => {
          return (
            <div>
              <img src={sld.url} alt={sld.name} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Landing;
