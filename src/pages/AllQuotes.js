import QuoteList from "../components/quotes/QuoteList";

const DUMMY_Quotes = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_Quotes} />;
};

export default AllQuotes;
