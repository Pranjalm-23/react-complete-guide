import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const onAddQuoteHandler = (quoteData) => {};

  return <QuoteForm onAddQuote={onAddQuoteHandler} />;
};

export default NewQuote;
