import { Stack } from "react-bootstrap";
import EditorCard from "./EditorCard";
import "./Editor.css";
import { editor1, editor2, editor3 } from "../../../assets/images";

const editorData = [
  {
    id: 1,
    subTitle: "MINIMALISM",
    title: "Culpa sit Laboris Exercitation ea Fugiat",
    img: editor1
  },

  {
    id: 2,
    subTitle: "TECHNOLOGY",
    title: "Amet non Ex Officia nulla Cupidatat",
    img: editor2,
  },
  {
    id: 3,
    subTitle: "ARTICLE",
    title: "Dolor ex Tempor Cotur Culpa li",
    img: editor3
  },
];
const EditorSection = () => {
  return (
    <Stack className="py-4">
      <Stack className="editor-content-container">
        <p style={{ textDecoration: "underline" }} className="section-title">
          Editor’s Picks
        </p>

        <Stack gap={3} className="mt-5">
          {editorData.map((el) => {
            return <EditorCard key={el.id} {...el} />;
          })}
         
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EditorSection;
