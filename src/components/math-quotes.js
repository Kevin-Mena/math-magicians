import { useEffect, useState } from 'react';

const url = 'https://api.api-ninjas.com/v1/quotes?category=computers';
const API_KEY = 'En6KYhKgbYaCLmYOVtqFhA==W6viOXJ3erlnK3aa';

const ShowRandomMathQuote = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: { 'X-Api-Key': API_KEY },
          contentType: 'application/json',
        });
        const data = await response.json();
        setData(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Oops!Something went wrong..!</p>;
  }
  const { quote, author } = data[0];
  return (
    <div className="quote-div">
      <h1 className="quote-header">quote</h1>
      <p className="quote">
        &#34;
        {quote}
        &#34;
        <br />
        <span className="author">
          &#8211;
          {author}
        </span>
      </p>
    </div>
  );
};
export default ShowRandomMathQuote;
