import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "../SearchBar/SearchBar";

const meta = {
  title: "GPI UI Library/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    placeholder: "Search here...",
    suggestions: ["item 1", "item 2", "item 3", "item 4", "item 5"],
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchBarSample: Story = {
  args: {
    placeholder: "Type to search...",
    suggestions: ["item 1", "item 2", "item 3", "item 4", "item 5"], 
  },
  argTypes: {
    onChange: { action: "search text changed" },
    onSubmit: { action: "form submitted" },
  },
};
