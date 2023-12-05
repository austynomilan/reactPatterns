import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "../components/coreConcept";
import Section from "./section";

export default function coreConcepts() {
  return (
    <>
      <Section title='Core-concepts' id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts
                key={concept.title}
                title={concept.title}
                image={concept.image}
                description={concept.description}
              />
            ))}
          </ul>
        </Section>
    </>
  )
}
