import {
  NewsletterContainer,
  NewsletterContent,
  NewsletterBg,
  FormContainer,
} from "../HomePage/Newsletter.styled";
import pattern from "../../assets/photos/pattern.jpg";

const Newsletter = () => {
  return (
    <NewsletterContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <NewsletterContent>
        <h2>Ready for Next NFT Drop?</h2>
        <NewsletterBg>
          <img src={pattern} alt="background" />
        </NewsletterBg>
        <FormContainer>
          <input type="text" placeholder="info@gmail.com" />
          <button>subscribe</button>
        </FormContainer>
      </NewsletterContent>
    </NewsletterContainer>
  );
};

export default Newsletter;
