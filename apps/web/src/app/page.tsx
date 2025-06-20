"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@repo/ui/button";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3001";

export default function Web() {
  const [name, setName] = useState<string>("");
  const [response, setResponse] = useState<{ message: string } | null>(null);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    setResponse(null);
    setError(undefined);
  }, [name]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await fetch(`${API_HOST}/message/${name}`);
      const response = await result.json();
      setResponse(response);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch response");
    }
  };

  const onReset = () => {
    setName("");
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex p-4 justify-between items-center bg-gray-200">
        <h1 className="text-2xl font-bold">Web</h1>
        <p className="text-sm text-gray-500">This is a web app for sure...</p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center gap-4 bg-gray-100">
        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center gap-4">
          <label htmlFor="name" className="flex flex-col items-start justify-center text-sm font-bold">Name
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onChange}
            ></input>
          </label>

          <Button type="submit">Submit</Button>
        </form>
        {error && (
          <div>
            <h3>Error</h3>
            <p>{error}</p>
          </div>
        )}
        {response && (
          <div className="flex flex-col items-center justify-center">
            <h3>Greeting</h3>
            <p>{response.message}</p>
            <Button onClick={onReset}>Reset</Button>
          </div>
        )}
      </main>
    </div>
  );
}
