// FOR BLOCK LEVEL STYLES(Returns CSS Class From DraftEditor.css)
export const blockStyleFn = (contentBlock) => {
  const type = contentBlock.getType();
  switch (type) {
    case "blockQuote":
      return "superFancyBlockquote";
    case "leftAlign":
      return "leftAlign";
    case "rightAlign":
      return "rightAlign";
    case "centerAlign":
      return "centerAlign";
    case "justifyAlign":
      return "justifyAlign";
    default:
      break;
  }
};
