"use client";

import Layout from "../../../components/layout/Layout";
import ContentHeader from "../../../components/ui/ContentHeader";
import React, { useEffect, useState } from "react";
import Tag from "../../../components/ui/Tag";

export default function ICEPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/ice/data", { cache: "no-store" });
      if (!res.ok) {
        setError(await res.text());
        return;
      }
      setData(await res.json());
    })();
  }, []);

  return (
    <Layout>
      <ContentHeader
        title="In Case of Emergency"
        excerpt="Emergency Info for Timo M. Staudinger"
        showProfile={false}
      />

      {error && <pre>{error}</pre>}
      {!data && <div>Loading…</div>}

      {data?.sections.map((section: any, idx: number) => (
        <section key={idx}>
          <h2>{section.title}</h2>

          {section.photo && (
            <img
              src={section.photo.src}
              alt={section.photo.alt}
              className="photo"
            />
          )}

          {section.tags && (
            <p className="tags">
              {section.tags.map((tag: any, i: number) => (
                <Tag label={tag.label} key={i}>
                  {tag.value}
                </Tag>
              ))}
            </p>
          )}

          {section.horizontal ? (
            <div className="horizontal-children">
              {section.children?.map((child: any, cIdx: number) => (
                <section key={cIdx} className="horizontal-child">
                  <h3>{child.title}</h3>

                  {child.tags && (
                    <p>
                      {child.tags.map(
                        (
                          tag: { label?: string; value: string },
                          tIdx: number,
                        ) => (
                          <Tag label={tag.label} key={tIdx}>
                            {tag.value}
                          </Tag>
                        ),
                      )}
                    </p>
                  )}
                </section>
              ))}
            </div>
          ) : (
            section.children?.map((child: any, cIdx: number) => (
              <section key={cIdx}>
                <h3>{child.title}</h3>

                {child.tags && (
                  <p>
                    {child.tags.map(
                      (
                        tag: { label?: string; value: string },
                        tIdx: number,
                      ) => (
                        <Tag label={tag.label} key={tIdx}>
                          {tag.value}
                        </Tag>
                      ),
                    )}
                  </p>
                )}
              </section>
            ))
          )}
        </section>
      ))}

      <style jsx>
        {`
          .photo {
            width: 200px;
            display: inline;
            border-radius: 50%;
            margin-right: 20px;
          }

          .tags {
            display: inline-block;
          }

          .horizontal-children {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }

          .horizontal-child {
            flex: 1;
            min-width: 200px;
          }
        `}
      </style>
    </Layout>
  );
}
