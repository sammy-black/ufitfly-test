import { Stack } from "react-bootstrap";

interface EditorCardProps {
  title: string;
  subTitle: string;
  img: {
    default: string;
  };
}

const EditorCard = ({ title, subTitle, img }: EditorCardProps) => {
  return (
    <Stack direction="horizontal" gap={5}>
      <div className="editor-img-box">
        <img src={img.default} />
      </div>
      <Stack className="w-50" gap={3}>
        <p className="body-text-title">{subTitle}</p>
        <p className="title-text">{title}</p>
        <Stack direction="horizontal" gap={2}>
          <p className="body1">Ralph Hawkins</p>
          <p className="body1">May 7, 2019 (10 mins read)</p>
        </Stack>
        <p className="body1" style={{ color: "black" }}>
          Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut
          et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident
          ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation
          nisi fugiat. Dolor velit excepteur commodo proident nulla commodo
          ullamco labore et esse.
        </p>
      </Stack>
    </Stack>
  );
};

export default EditorCard;
