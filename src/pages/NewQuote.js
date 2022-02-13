import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const onAddQuoteHandler = (quoteData) => {
    console.log(quoteData);

    //programmatic (imperative) navigation (navigation without links)
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={onAddQuoteHandler} />;
};

export default NewQuote;
