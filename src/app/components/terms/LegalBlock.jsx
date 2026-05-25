// components/terms/LegalBlock.jsx

function LegalBlock({ block }) {
  if (block.type === "h3") {
    return <h3>{block.text}</h3>;
  }

  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item, index) => (
          <li
            key={
              typeof item === "string"
                ? item
                : item.strong + index
            }
          >
            {typeof item === "string" ? (
              item
            ) : (
              <>
                <strong>{item.strong}</strong>{" "}
                {item.text}
              </>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return <p>{block.text}</p>;
}

export default LegalBlock;