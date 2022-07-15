import React, { useEffect, useState } from "react";
import { fetchExample } from "../store/actions/exampleAction";
import { useDispatch, useSelector } from "react-redux";

const ExampleComponent = () => {
  const [response, setResponse] = useState("");

  const dispatch = useDispatch();

  const exampleState = useSelector((state) => state.exampleState);
  const { loading, error, example } = exampleState;

  useEffect(() => {
    if (!example) {
      dispatch(fetchExample({ message: "Send example message" }));
    }

    setResponse(example);
  }, [dispatch, example]);

  return (
    <div>
      {loading === "loading" ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <h1>{response}</h1>
      )}
    </div>
  );
};

export default ExampleComponent;
