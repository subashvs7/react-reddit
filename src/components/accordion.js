import AccordionItem from "./accordionItem";
import he from "he";

export default function Accordion({ data }) {
  if (!data || !data.data || !data.data.children) {
    return null;
  }
  return (
    <div className="accordion">
      {data.data.children.map((value, index) => {
        const selftextHtml = value.data.selftext_html;
        const decodedHtml = selftextHtml ? he.decode(selftextHtml) : null;

        return (
          <AccordionItem
            key={value.data.title}
            content={<div dangerouslySetInnerHTML={{ __html: decodedHtml }} />}
            num={index}
            title={value.data.title}
            url={value.data.url}
            score={value.data.score}
          />
        );
      })}
    </div>
  );
}
