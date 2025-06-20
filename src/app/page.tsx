import BasicAnimation from "@/app/Animation/basic";
import Dummy from "./Animation/TransForm";
import Dummy2 from "./Animation/tranform2";
import While from "./Animation/whileinview/while";
import AnimatedBoxes from "./Animation/whileinview/while2";

export default function Home() {
  return (
    <>
      Home
      <AnimatedBoxes />
      <While />
      <Dummy2 />
      <Dummy />
      <BasicAnimation />
    </>
  );
}
