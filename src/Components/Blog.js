import React from "react";
import useTitle from "../Hooks/useTitle";

const Blog = () => {
  useTitle('blog')
  return (
    <div className="m-5 p-5">
      <div>
        <h1>SQL vs NoSQL </h1>
        <p>
          {" "}
          Type – SQL databases are primarily called as Relational Databases
          (RDBMS); whereas NoSQL database are primarily called as non-relational
          or distributed database.
        </p>
        <p>
          {" "}
          Structure – SQL databases are table-based on the other hand NoSQL
          databases are either key-value pairs, document-based, graph databases
          or wide-column stores. This makes relational SQL databases a better
          option for applications that require multi-row transactions such as an
          accounting system or for legacy systems that were built for a
          relational structure.
        </p>
      </div>
      <div>
        <h2>What is JWT, and how does it work?</h2>
        <p>
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP).{" "}
        </p>
      </div>
      <div>
        <h2>What is the difference between javascript and NodeJS? </h2>
        <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
      </div>
      <div>
        <h2>How does NodeJS handle multiple requests at the same time?</h2>
        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
      </div>
    </div>
  );
};

export default Blog;
