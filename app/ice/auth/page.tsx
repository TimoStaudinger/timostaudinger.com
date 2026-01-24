'use client'

import ContentHeader from "../../../components/ContentHeader";
import React from "react";
import Layout from "../../../components/Layout";

export default function ICEAuthPage() {
  return (
    <Layout>
      <ContentHeader
        title="Enter Password"
        excerpt="Emergency Info for Timo M. Staudinger"
        showProfile={false}
      />

      <form action="/api/ice/auth" method="post" className="form">
        <input
          name="pin"
          type="password"
          inputMode="numeric"
          placeholder="Password"
        />
        <button type="submit">Continue</button>
      </form>

      <style jsx>{`
        .form {
          width: 100%;
          max-width: 400px;
          display: flex;
          margin-left: auto;
          margin-right: auto;

          input {
            flex: 1;
            font-size: 1.5em;
            margin-right: 15px;
          }

          button {
            font-size: 1.5em;
          }
        }
      `}</style>
    </Layout>
  );
}
