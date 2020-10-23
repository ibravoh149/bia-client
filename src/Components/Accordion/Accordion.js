import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Collapse } from "reactstrap";
import PropTypes from "prop-types";
import "./Accordion.scss";

const AccordionItem = ({ question, answer, toggle, index, selected }) => {
  return (
    <div className="custom-accordion-item" onClick={() => toggle(index)}>
      <div className="custom-accordion-item__heading">
        <h4>{question}</h4>{" "}
        {selected === index ? (
          <IoIosArrowUp size={10} />
        ) : (
          <IoIosArrowDown size={10} />
        )}
      </div>
      <Collapse isOpen={selected === index}>
        <p className="custom-accordion-item__answer">{answer}</p>
      </Collapse>
    </div>
  );
};

export const AccordionContainer = ({ content }) => {
  const [selected, setSelected] = useState(null);
  const toggle = (value) => setSelected(value);

  return (
    <>
      {content &&
        content.length > 0 &&
        content.map((c, i) => {
          return (
            <AccordionItem
              selected={selected}
              index={i}
              question={c.question}
              answer={c.answer}
              toggle={toggle}
            />
          );
        })}
    </>
  );
};

AccordionContainer.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.any,
      answer: PropTypes.any,
    })
  ),
};
