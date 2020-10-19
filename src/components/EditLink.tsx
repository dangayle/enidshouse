import { TinaCMS } from "tinacms";

export interface EditLinkProps {
  cms: TinaCMS;
}

export const EditLink = ({ cms }: EditLinkProps) => {
  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? "Exit edit mode" : "Edit"}
    </button>
  );
};
