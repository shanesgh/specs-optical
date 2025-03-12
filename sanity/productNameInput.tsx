import React, { useCallback } from "react";
import { Button, Flex, TextInput, Code } from "@sanity/ui";
import { set, StringInputProps } from "sanity";

const generateCoupon = () => {
  const length = Math.floor(Math.random() * 15) + 6;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
};

export function ProductNameInput(props: StringInputProps) {
  const { value, onChange } = props;

  const handleGenerateCoupon = useCallback(() => {
    const code = generateCoupon();
    onChange(set(code));
  }, [onChange]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(set(newValue));
  };

  return (
    <Flex direction="column" gap={3}>
      <TextInput type="text" value={value || ""} onChange={handleChange} />
      {value && <Code>{value}</Code>}
      <Button
        mode="ghost"
        onClick={handleGenerateCoupon}
        text="Generate Product Code"
      />
    </Flex>
  );
}
