import { DisplayTab } from "./DisplayTab";

export const ChatTab = () => {
  return (
    <DisplayTab
      name="Hey, Mustafa"
      subHeading="you can ask me anything, i am here to help you!"
      inputPlaceholder="enter your promt here.."
      showInput={true}
    />
  );
};
