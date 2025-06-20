import BasicAnimation from "@/app/Animation/basic";
import Dummy from "./Animation/TransForm";
import Dummy2 from "./Animation/tranform2";
import While from "./Animation/whileinview/while";
import AnimatedBoxes from "./Animation/whileinview/while2";
import Basic from "./Animation/useScroll/Basic";
import ScrollAnimation from "./Animation/useScroll/example1";

export default function Home() {
  return (
    <>
      Home
      <ScrollAnimation />
      <Basic />
      <AnimatedBoxes />
      <While />
      <Dummy2 />
      <Dummy />
      <BasicAnimation />
    </>
  );
}
