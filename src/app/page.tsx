import { ModeSwitch } from "@/ModeSwitch";
import { Button, Space } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Space  direction="horizontal" className="justify-between w-full">
        <Button type="primary">Button</Button>
        <Button type="primary">Button</Button>
         <ModeSwitch />
      </Space>
    </div>
  );
}
