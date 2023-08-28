import {
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faArrowDown,
  faArrowUp,
  faBold,
  faCode,
  faHighlighter,
  faItalic,
  faListOl,
  faListUl,
  faQuoteRight,
  faStrikethrough,
  faSubscript,
  faSuperscript,
  faTextWidth,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const tools = [
  {
    label: "Bold",
    style: "BOLD",
    icon: <FontAwesomeIcon icon={faBold} />,
    method: "inline",
  },
  {
    label: "Italic",
    style: "ITALIC",
    icon: <FontAwesomeIcon icon={faItalic} />,
    method: "inline",
  },
  {
    label: "Underline",
    style: "UNDERLINE",
    icon: <FontAwesomeIcon icon={faUnderline} />,
    method: "inline",
  },
  {
    label: "Highlight",
    style: "HIGHLIGHT",
    icon: <FontAwesomeIcon icon={faHighlighter} />,
    method: "inline",
  },
  {
    label: "Strike Through",
    style: "STRIKETHROUGH",
    icon: <FontAwesomeIcon icon={faStrikethrough} />,
    method: "inline",
  },
  {
    label: "Superscript",
    style: "SUPERSCRIPT",
    icon: <FontAwesomeIcon icon={faSuperscript} />,
    method: "inline",
  },
  {
    label: "Subscript",
    style: "SUBSCRIPT",
    icon: <FontAwesomeIcon icon={faSubscript} />,
    method: "inline",
  },
  {
    label: "Monospace",
    style: "CODE",
    icon: <FontAwesomeIcon icon={faTextWidth} />,
    method: "inline",
  },

  {
    label: "Unordered List",
    style: "unordered-list-item",
    method: "block",
    icon: <FontAwesomeIcon icon={faListUl} transform="grow-1" />,
  },
  {
    label: "Ordered List",
    style: "ordered-list-item",
    method: "block",
    icon: <FontAwesomeIcon icon={faListOl} transform="grow-1" />,
  },
  {
    label: "Code Block",
    style: "CODEBLOCK",
    icon: <FontAwesomeIcon icon={faCode} />,
    method: "inline",
  },
  {
    label: "Uppercase",
    style: "UPPERCASE",
    icon: <FontAwesomeIcon icon={faArrowUp} />,
    method: "inline",
  },
  {
    label: "Lowercase",
    style: "LOWERCASE",
    icon: <FontAwesomeIcon icon={faArrowDown} />,
    method: "inline",
  },
  {
    label: "Blockquote",
    style: "blockQuote",
    icon: <FontAwesomeIcon icon={faQuoteRight} />,
    method: "block",
  },
  {
    label: "Left",
    style: "leftAlign",
    icon: <FontAwesomeIcon icon={faAlignLeft} transform="grow-1" />,
    method: "block",
  },
  {
    label: "Center",
    style: "centerAlign",
    icon: <FontAwesomeIcon icon={faAlignCenter} transform="grow-1" />,
    method: "block",
  },
  {
    label: "Right",
    style: "rightAlign",
    icon: <FontAwesomeIcon icon={faAlignRight} transform="grow-1" />,
    method: "block",
  },

  { label: "H1", style: "header-one", method: "block" },
  { label: "H2", style: "header-two", method: "block" },
  { label: "H3", style: "header-three", method: "block" },
  { label: "H4", style: "header-four", method: "block" },
  { label: "H5", style: "header-five", method: "block" },
  { label: "H6", style: "header-six", method: "block" },
];
