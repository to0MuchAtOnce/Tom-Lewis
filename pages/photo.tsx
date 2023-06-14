import type { NextPage } from "next";
import Container from "../components/Container";

const Photo: NextPage = () => {
  return (
    <Container title="Photo">
      <div>Photo</div>
      <a data-flickr-embed="false" href="https://www.flickr.com/photos/198535393@N04/52973854993/in/dateposted/" title="IMG_20211016_132149"><img src="https://live.staticflickr.com/65535/52973854993_f57a8c7183_k.jpg" width="1155" height="2048" alt="IMG_20211016_132149"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
    </Container>
  );
};

export default Photo;
